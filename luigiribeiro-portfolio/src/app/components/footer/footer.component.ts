import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
  
})
export class FooterComponent {
  language: 'pt' | 'en' = 'pt';
  isFlipping = false;
  constructor(private globalService: GlobalService) {
    
    this.globalService.language$.subscribe(lang => {
      this.language = lang;
    });
  }

  toggleLanguage() {
    this.isFlipping = true;

    setTimeout(() => {
      const newLang = this.language === 'pt' ? 'en' : 'pt';
      this.globalService.setLanguage(newLang); // Atualiza a linguagem global
    }, 300); 

    setTimeout(() => {
      this.isFlipping = false;
    }, 600); 
  }
}
