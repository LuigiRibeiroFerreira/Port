import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OceanComponent } from '../../components/ocean/ocean.component';
import { WhoIAmComponent } from '../../components/who-i-am/who-i-am.component';
import { IdentifyComponent } from '../../components/identify/identify.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [OceanComponent, WhoIAmComponent, IdentifyComponent, ExperiencesComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  currentTheme: 'light' | 'dark' | 'ocean';

  constructor(public globalService: GlobalService) {
    this.currentTheme = this.globalService.theme;
  }

  ngOnInit() {
    this.currentTheme = this.globalService.theme; 
  }
  
}
