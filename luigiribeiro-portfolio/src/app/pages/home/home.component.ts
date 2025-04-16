import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from '../../components/hero/hero.component';
import { SectionPreviewComponent } from '../../components/section-preview/section-preview.component';

import { GlobalService } from '../../services/global.service';
import { HomeContentService } from '../../services/content/home-content.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, SectionPreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  homeData$: ReturnType<HomeContentService['getHomeData']>;

  constructor(
    private homeContentService: HomeContentService,
    public globalService: GlobalService
  ) {
    this.homeData$ = this.homeContentService.getHomeData();
  }
}
