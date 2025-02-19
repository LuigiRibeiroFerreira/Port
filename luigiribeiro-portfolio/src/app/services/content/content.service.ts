import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';
import { Observable, switchMap, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export abstract class BaseContentService<T> {
  constructor(
    protected http: HttpClient,
    protected globalService: GlobalService,
    protected contentPath: string
  ) {}

  getContent(): Observable<T> {
    return this.globalService.language$.pipe(
      switchMap(lang => 
        this.http.get<T>(`/assets/content/${lang}/${this.contentPath}.json`)
      )
    );
  }
}