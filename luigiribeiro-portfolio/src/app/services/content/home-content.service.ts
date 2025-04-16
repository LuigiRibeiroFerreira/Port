import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, switchMap, map, tap } from 'rxjs';
import { GlobalService } from '../global.service';
import { HomeData } from '../../models/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeContentService {
  private homeData$ = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) {
    this.initialize();
}

private initialize() {
    this.http.get('/content/home.json').pipe(
      tap(data => this.homeData$.next(data)),
      switchMap(() => this.globalService.language$)
    ).subscribe();
}

getHomeData() {
    return this.globalService.language$.pipe(
      switchMap(lang => this.homeData$.pipe(
        map(data => data?.[lang] || {})
      ))
    );
  }
}
