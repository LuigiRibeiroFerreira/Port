import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoIAmComponent } from '../../components/who-i-am/who-i-am.component';
import { IdentifyComponent } from '../../components/identify/identify.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { GlobalService } from '../../services/global.service';
import { CoursesComponent } from '../../components/courses/courses.component';
import { SkillsComponent } from '../../components/skills/skills.component';

import { AboutContentService } from '../../services/content/about-content.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ WhoIAmComponent, IdentifyComponent, ExperiencesComponent, CommonModule, CoursesComponent, SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  aboutData$: ReturnType<AboutContentService['getAboutData']>;
  currentTheme: 'light' | 'dark' | 'ocean';

  constructor(
    private aboutContentService: AboutContentService,
    public globalService: GlobalService
  ) {
    // Initialize properties after injection
    this.aboutData$ = this.aboutContentService.getAboutData();
    this.currentTheme = this.globalService.theme;
  }
}