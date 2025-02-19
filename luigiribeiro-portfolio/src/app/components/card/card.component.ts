import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { CardData } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import AOS from 'aos';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() data!: CardData;
  
  ngOnInit() {
    
    AOS.init();
    console.log('CardComponent Initialized'); // Add this
    console.log('Data:', this.data);
  }
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const tiltElements = this.elementRef.nativeElement.querySelectorAll('.tilt-element');
    VanillaTilt.init(tiltElements, {
      max: 10,
      speed: 400,
      transition:     true, 
      scale: 1.03,

    });
  }
}



