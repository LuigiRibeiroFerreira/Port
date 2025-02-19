import { Injectable } from '@angular/core';
import { ProjectsData } from '../../models/projects.model';
import projectsData from '../../content/projects.json';

@Injectable({
  providedIn: 'root'
})
export class ProjectsContentService {
  getProjects(): ProjectsData {
    return projectsData;
  }
}