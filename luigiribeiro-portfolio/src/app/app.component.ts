import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { GlobalService } from '../app/services/global.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { trigger, transition, style, animate } from '@angular/animations';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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

  constructor(public globalService: GlobalService) {}

  ngOnInit() {
    AOS.init();
    this.calculateSpacing(); // Calcula o espaçamento ao inicializar
    console.log(`Tema inicial: ${this.globalService.theme}`);
  }

  // Função para calcular o valor de espaçamento e definir a variável CSS
  calculateSpacing(): void {
    const viewportWidth = window.innerWidth;
    const viewpotHeight = window.innerHeight
    const spacing = -0.0329 * viewportWidth + 100;
    const iframeh = viewpotHeight;
    // Atualiza a variável CSS global
    document.documentElement.style.setProperty('--spacing', `${spacing}vw`);
    document.documentElement.style.setProperty('--iframeh', `${iframeh}px`);
    console.log("Altura do iframe", iframeh, "px");
    console.log("Espaçamento atualizado:", spacing, "vw");
  }

  // Listener para atualizar o cálculo de espaçamento ao redimensionar a janela
  @HostListener('window:resize')
  onResize() {
    this.calculateSpacing();
  }

  get theme() {
    const currentTheme = this.globalService.theme;
    return `${currentTheme}-theme`; // Adiciona "-theme" ao nome do tema
  }
}
