import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  private readonly LANGUAGE_KEY = 'selectedLanguage';
  public _language = new BehaviorSubject<'pt' | 'en'>(this.getStoredLanguage());
  private _animationTrigger = new BehaviorSubject<number>(0);

  private _theme: 'light' | 'dark' = 'dark'; 



  language$ = this._language.asObservable();
  animationTrigger$ = this._animationTrigger.asObservable();

  get theme(): 'light' | 'dark' | 'ocean' {
    return this._theme;
  }



  setLanguage(lang: 'pt' | 'en'): void {
    this._language.next(lang);
    this._animationTrigger.next(this._animationTrigger.value + 1);
    localStorage.setItem(this.LANGUAGE_KEY, lang);
    
  }

  setTheme(theme: 'light' | 'dark'): void {
    this._theme = theme;
  }
  private getStoredLanguage(): 'pt' | 'en' {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem(this.LANGUAGE_KEY) as 'pt' | 'en';
      if (storedLang) return storedLang;
    }
    return 'pt'; // Default if nothing is saved
  }
  
}
