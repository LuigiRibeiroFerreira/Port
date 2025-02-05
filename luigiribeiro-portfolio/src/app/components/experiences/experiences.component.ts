import { Component, OnInit, ElementRef, AfterViewInit, Input} from '@angular/core';
import AOS from 'aos';
import VanillaTilt from 'vanilla-tilt';
import { CardData } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Experience } from '../../models/about.model';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  @Input() experiences!: Experience[]; // Raw data from parent
  cardData!: CardData[]; // Transformed data for cards
  ngOnInit() {
    AOS.init();
    // Transform experiences into CardData
    this.cardData = this.experiences.map(exp => ({
      type: 'experience',
      title: exp.projectName,
      subtitle: exp.company,
      description: exp.description,
      imagePath: exp.imagePath
    }));
    console.log('Card Data:', this.cardData); // Verify mapping
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
