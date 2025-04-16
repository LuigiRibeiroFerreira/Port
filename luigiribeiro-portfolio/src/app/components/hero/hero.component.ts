import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import AOS from 'aos';
import { HeroSection } from '../../models/home.model'; 

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  @Input() heroData: HeroSection | null = null;
  
    ngOnInit() {
      
      AOS.init();
      
    }
}
