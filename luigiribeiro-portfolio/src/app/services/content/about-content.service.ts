import { Injectable } from '@angular/core';
import { AboutData } from '../../models/about.model';
import aboutData from '../../content/about.json';

@Injectable({
  providedIn: 'root'
})
export class AboutContentService {
  getAboutData(): AboutData {
    return aboutData;
  }
}