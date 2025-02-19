import { Injectable } from '@angular/core';
import { HeaderData } from '../../models/header.model';
import { BaseContentService } from './content.service';
import headerData from '../../content/header.json';
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';
import {inject } from '@angular/core';
import { switchMap } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderContentService {
  private http = inject(HttpClient);
  private globalService = inject(GlobalService);

  getHeaderData(): Observable<any> {
    return this.globalService.language$.pipe(
      switchMap(lang => {
        console.log(`Idioma atual: ${lang}`); // Verifica se o idioma está certo
        return this.http.get(`../../content/${lang}/header.json`);
      })
    );
  }
}