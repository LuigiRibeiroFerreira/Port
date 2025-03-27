import { Component} from '@angular/core';
import { AboutContentService } from '../../services/content/about-content.service';

import { ProjectsContentService } from '../../services/content/projects-content.service';
import { CommonModule } from '@angular/common';
import { DevelopmentsComponent } from '../../components/developments/developments.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, DevelopmentsComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectsData$: ReturnType<ProjectsContentService['getProjects']>;

  constructor(private projectsContentService: ProjectsContentService) {
    this.projectsData$ = this.projectsContentService.getProjects();
  }
}