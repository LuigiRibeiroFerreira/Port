import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, switchMap, map, tap } from 'rxjs';
import { GlobalService } from '../global.service';
import { AboutData } from '../../models/about.model';


@Injectable({
  providedIn: 'root'
})
export class AboutContentService {
  private aboutData$ = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) {
    this.initialize();
  }

  private initialize() {
    this.http.get('/content/about.json').pipe(
      tap(data => this.aboutData$.next(data)),
      switchMap(() => this.globalService.language$)
    ).subscribe();
  }

  getAboutData() {
    return this.globalService.language$.pipe(
      switchMap(lang => this.aboutData$.pipe(
        map(data => data?.[lang] || {})  // Now properly typed
      ))
    );
  }
}