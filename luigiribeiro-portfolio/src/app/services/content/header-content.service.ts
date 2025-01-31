import { Injectable } from '@angular/core';
import { HeaderData } from '../../models/header.model';
import headerData from '../../content/header.json';

@Injectable({
  providedIn: 'root'
})
export class HeaderContentService {
  getHeaderData(): HeaderData {
    return headerData;
  }
}