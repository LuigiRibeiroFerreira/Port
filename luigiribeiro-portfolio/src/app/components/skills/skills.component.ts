import { Component, Input} from '@angular/core';
import { Skills } from '../../models/about.model';
import { CommonModule } from '@angular/common';
import { AboutData } from '../../models/about.model';
import { AboutContentService } from '../../services/content/about-content.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() skills!: Skills; 
  aboutData!:AboutData

  constructor(private aboutService: AboutContentService) {}

  ngOnInit() {
      
      this.aboutData = this.aboutService.getAboutData();
  }
      
}