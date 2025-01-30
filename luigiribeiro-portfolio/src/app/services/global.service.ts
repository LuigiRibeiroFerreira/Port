import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // Variáveis globais para o idioma, tema e página atual
  private _language: 'pt' | 'en' = 'pt'; // Padrão: Português
  private _theme: 'light' | 'dark' | 'ocean' = 'dark'; // Padrão: Tema escuro
  private _currentPage: 'About' | 'Projects' | 'Creativity' = 'About'; // Padrão: About

  // Getters para acessar as variáveis
  get language(): 'pt' | 'en' {
    return this._language;
  }

  get theme(): 'light' | 'dark' | 'ocean' {
    return this._theme;
  }

  get currentPage(): 'About' | 'Projects' | 'Creativity' {
    return this._currentPage;
  }

  // Métodos para atualizar o idioma, tema e página atual
  setLanguage(lang: 'pt' | 'en'): void {
    this._language = lang;
  }

  setTheme(theme: 'light' | 'dark' | 'ocean'): void {
    this._theme = theme;
  }
  

  setCurrentPage(page: 'About' | 'Projects' | 'Creativity'): void {
    this._currentPage = page;
  }
}
