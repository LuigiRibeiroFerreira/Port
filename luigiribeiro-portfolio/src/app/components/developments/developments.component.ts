import { Component,OnInit,Input } from '@angular/core';
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
export class DevelopmentsComponent implements OnInit {
  @Input() projects!: Project[]; // Input from parent component
  cardData!: CardData[];

  ngOnInit() {
    AOS.init();
    this.cardData = this.projects.map(project => ({
      type: 'project',
      title: project.title,
      subtitle: project.subtitle,
      description: project.description,
      imagePath: project.imagePath,
      // Additional project-specific fields
      technologies: project.technologies,
      projectLink: project.projectLink,
      codeLink: project.codeLink
    }));
  }
}