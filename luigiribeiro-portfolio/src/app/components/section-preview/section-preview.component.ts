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
  icons: Record<string, string> = {
    user: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
           stroke-width="1.5" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    `,
    folder: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
           stroke-width="1.5" viewBox="0 0 24 24">
        <path d="M3 7a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </svg>
    `,
    file: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
           stroke-width="1.5" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>
    `
  };
}