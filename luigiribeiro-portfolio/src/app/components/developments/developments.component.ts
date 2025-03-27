import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardData } from '../../models/card.model';
import { Project } from '../../models/projects.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import AOS from 'aos';

@Component({
  selector: 'app-developments',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './developments.component.html',
  styleUrl: './developments.component.css'
})
export class DevelopmentsComponent implements OnChanges {
  @Input() projects: Project[] = [];
  @Input() sectionTitle = '';
  cardData: CardData[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['projects']) {
      this.processProjects();
    }
  }

  private processProjects() {
    this.cardData = this.projects.map(project => ({
      type: 'project',
      title: project.title,
      subtitle: project.subtitle,
      description: project.description,
      imagePath: project.imagePath,
      technologies: project.technologies,
      projectLink: project.projectLink,
      codeLink: project.codeLink
    }));

    setTimeout(() => AOS.refresh(), 0);
  }
}