import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service'; 

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css']
})
export class ThemeSwitchComponent {
  constructor(private globalService: GlobalService) {}

  toggleTheme() {
    const newTheme = this.globalService.theme === 'dark' ? 'light' : 'dark';
    this.globalService.setTheme(newTheme);


    
    document.body.classList.toggle('dark-theme', newTheme === 'dark');
  }


  toggleLanguage() {
    const newLanguage = this.globalService.language === 'pt' ? 'en' : 'pt';
    this.globalService.setLanguage(newLanguage);
    // Aqui você pode adicionar lógica para atualizar textos ou componentes com base na nova linguagem
  }
}
