import { Component, Input } from '@angular/core';

import { PersonalInfo } from '../../models/about.model';
@Component({
  selector: 'app-identify',
  standalone: true,
  imports: [],
  templateUrl: './identify.component.html',
  styleUrl: './identify.component.css'
})
export class IdentifyComponent {
  @Input() personalInfo!: PersonalInfo;

}
