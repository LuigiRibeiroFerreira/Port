import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionPreview } from '../../models/home.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-section-preview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './section-preview.component.html',
  styleUrl: './section-preview.component.css',
})
export class SectionPreviewComponent {
  @Input() section!: SectionPreview;
  
  
}