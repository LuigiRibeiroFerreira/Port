import { Component, Input, OnInit } from '@angular/core';
import { CardData } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

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
}



