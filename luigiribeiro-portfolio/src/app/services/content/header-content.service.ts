import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject,switchMap,map, tap } from 'rxjs';

import { GlobalService } from '../global.service';
import { HeaderData } from '../../models/header.model';
import { BaseContentService } from './content.service';
import headerData from '../../content/header.json';
import {inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderContentService {
  private headerData$ = new BehaviorSubject<any>(null);
  
  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) {
    this.initialize();
  }

  private initialize() {
    this.http.get('/content/header.json').pipe(
      tap(data => this.headerData$.next(data)),
      switchMap(() => this.globalService.language$)
    ).subscribe();
  }

  getHeaderData() {
    return this.globalService.language$.pipe(
      switchMap(lang => this.headerData$.pipe(
        map(data => data?.[lang] || {})
      ))
    );
  }
}
