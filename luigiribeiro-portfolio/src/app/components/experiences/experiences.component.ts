import { Component, OnInit, ElementRef, AfterViewInit, Input} from '@angular/core';
import AOS from 'aos';

import { CardData } from '../../models/card.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Experience } from '../../models/about.model';
import { AboutData } from '../../models/about.model';
import { AboutContentService } from '../../services/content/about-content.service';

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
  aboutData!:AboutData

  constructor(private aboutService: AboutContentService) {}
  ngOnInit() {
    AOS.init();
    this.aboutData = this.aboutService.getAboutData();
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
  

}
