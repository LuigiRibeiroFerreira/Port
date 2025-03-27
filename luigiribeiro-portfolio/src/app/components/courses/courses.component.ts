import { Component, Input, OnChanges,SimpleChanges } from '@angular/core';
import {CardData} from '../../models/card.model';
import { Course } from '../../models/about.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import AOS from 'aos';
import { AboutData } from '../../models/about.model';
import { AboutContentService } from '../../services/content/about-content.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnChanges {
  @Input() courses: Course[] = [];
  @Input() sectionTitle = '';
  cardData: CardData[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['courses']) {
      this.processCourses();
    }
  }

  private processCourses() {
    this.cardData = this.courses.map(course => ({
      type: 'course',
      title: course.name,
      subtitle: course.institution,
      description: course.description,
      imagePath: course.imagePath
    }));
    
    setTimeout(() => AOS.refresh(), 0); // Refresh AOS after data load
  }
}
