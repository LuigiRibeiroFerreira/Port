import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { GlobalService } from '../app/services/global.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { trigger, transition, style, animate } from '@angular/animations';

import { AnimateOnLangChangeDirective } from './diretives/animated-text.directive';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [
    AnimateOnLangChangeDirective,
    RouterOutlet,
    HeaderComponent,
    CommonModule,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in', style({ opacity: 1 }))
      ])
    ])
    
  ]
  
})
export class AppComponent implements OnInit {
  title = 'luigiribeiro-portfolio';
  showContent = true;
  lang: 'pt' | 'en' = 'pt';
  animationState = 0;
  constructor(public globalService: GlobalService, private el: ElementRef) {
    
  }

  ngOnInit() {
    AOS.init();
    
    this.calculateSpacing(); // Calculate spacing on initialization
    
    this.globalService.language$.subscribe((language) => {
      this.lang = language; 
      this.animationState++;
    });
  }
  resetState() {
    this.animationState = 0;
  }

  // Function to calculate the spacing value and set the CSS variable
  calculateSpacing(): void {
    const viewportWidth = window.innerWidth;
    const viewpotHeight = window.innerHeight
    const spacing = -0.0329 * viewportWidth + 100;
    const iframeh = viewpotHeight;
    // Updates the global CSS variable
    document.documentElement.style.setProperty('--spacing', `${spacing}vw`);
    document.documentElement.style.setProperty('--iframeh', `${iframeh}px`);
    
    
  }

  // Listener to update spacing calculation when resizing window
  @HostListener('window:resize')
  onResize() {
    this.calculateSpacing();
  }

  get theme() {
    const currentTheme = this.globalService.theme;
    return `${currentTheme}-theme`; // Add "-theme" to the theme name
  }
}
