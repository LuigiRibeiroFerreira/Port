import { Component, Input } from '@angular/core';
import { Skills } from '../../models/about.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  @Input() skills!: Skills; 
}