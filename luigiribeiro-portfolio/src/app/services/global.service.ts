import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  public _language = new BehaviorSubject<'pt' | 'en'>('pt');
  private _theme: 'light' | 'dark' | 'ocean' = 'dark'; 



  language$ = this._language.asObservable();

  get theme(): 'light' | 'dark' | 'ocean' {
    return this._theme;
  }



  setLanguage(lang: 'pt' | 'en'): void {
    this._language.next(lang);
  }

  setTheme(theme: 'light' | 'dark' | 'ocean'): void {
    this._theme = theme;
  }
  
}
