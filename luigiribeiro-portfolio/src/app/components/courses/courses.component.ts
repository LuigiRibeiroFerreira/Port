import { Component, Input } from '@angular/core';
import {CardData} from '../../models/card.model';
import { Course } from '../../models/about.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import AOS from 'aos';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  @Input() courses!: Course[]; // Input from parent (AboutComponent)
  cardData!: CardData[]; // Data mapped for CardComponent

  ngOnInit() {
    AOS.init();
    // Transform courses into CardData format
    this.cardData = this.courses.map(course => ({
      type: 'course',
      title: course.name,
      subtitle: course.institution,
      description: course.description,
      imagePath: course.imagePath 
    }));
  }
}
