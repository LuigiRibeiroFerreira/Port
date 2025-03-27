import { Injectable } from '@angular/core';
import { ProjectsData } from '../../models/projects.model';
import { GlobalService } from '../global.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, switchMap, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsContentService {
  private projectsData$ = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) {
    this.initialize();
  }

  private initialize() {
    this.http.get<ProjectsData>('/content/projects.json').pipe(
      tap(data => this.projectsData$.next(data)),
      switchMap(() => this.globalService.language$)
    ).subscribe();
  }

  getProjects() {
    return this.globalService.language$.pipe(
      switchMap(lang => this.projectsData$.pipe(
        map(data => data?.[lang] || {} as ProjectsData)
      ))
    );
  }
}