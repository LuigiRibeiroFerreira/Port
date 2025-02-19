import { Component, Input, OnInit } from '@angular/core';
import { ProjectsData } from '../../models/projects.model';
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
export class ProjectsComponent implements OnInit {
  projectsData!: ProjectsData;

  constructor(private projectsContentService: ProjectsContentService) {}

  ngOnInit() {
    this.projectsData = this.projectsContentService.getProjects();
  }
}