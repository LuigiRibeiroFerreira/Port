import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
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
export class ExperiencesComponent implements OnChanges {
  @Input() experiences: Experience[] = [];
  @Input() sectionTitle = '';
  cardData: CardData[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['experiences']) {
      this.processExperiences();
    }
  }

  private processExperiences() {
    this.cardData = this.experiences.map(exp => ({
      type: 'experience',
      title: exp.projectName,
      subtitle: exp.company,
      description: exp.description,
      imagePath: exp.imagePath
    }));

    setTimeout(() => AOS.refresh(), 0);
  }
}
