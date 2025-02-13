import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OceanComponent } from '../../components/ocean/ocean.component';
import { WhoIAmComponent } from '../../components/who-i-am/who-i-am.component';
import { IdentifyComponent } from '../../components/identify/identify.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { GlobalService } from '../../services/global.service';
import { AboutContentService } from '../../services/content/about-content.service';
import { AboutData } from '../../models/about.model';
import { CoursesComponent } from '../../components/courses/courses.component';
import { SkillsComponent } from '../../components/skills/skills.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [OceanComponent, WhoIAmComponent, IdentifyComponent, ExperiencesComponent, CommonModule, CoursesComponent, SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  currentTheme: 'light' | 'dark' | 'ocean';
  aboutData!: AboutData;

  constructor(public globalService: GlobalService, private aboutContentService: AboutContentService) {
    this.currentTheme = this.globalService.theme;
  }

  ngOnInit() {
    this.currentTheme = this.globalService.theme;
    this.aboutData = this.aboutContentService.getAboutData(); 
  }
  
}
