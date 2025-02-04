import { Component, OnInit, ElementRef, AfterViewInit, Input} from '@angular/core';
import AOS from 'aos';
import VanillaTilt from 'vanilla-tilt';
import { CardData } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  @Input() experiences!: CardData[];
  ngOnInit() {
    AOS.init();
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
