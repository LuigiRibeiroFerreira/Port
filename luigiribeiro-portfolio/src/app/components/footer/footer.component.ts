import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
  
})
export class FooterComponent {
  isEnglish = false;
  isFlipping = false;

  toggleLanguage() {
    this.isFlipping = true;

    setTimeout(() => {
      this.isEnglish = !this.isEnglish;
    }, 300); 

    setTimeout(() => {
      this.isFlipping = false;
    }, 600); 
  }
}
