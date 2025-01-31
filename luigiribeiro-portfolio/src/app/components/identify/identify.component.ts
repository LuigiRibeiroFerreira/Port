import { Component, Input } from '@angular/core';
import { OceanSwitchComponent } from '../ocean-switch/ocean-switch.component';
import { PersonalInfo } from '../../models/about.model';
@Component({
  selector: 'app-identify',
  standalone: true,
  imports: [OceanSwitchComponent],
  templateUrl: './identify.component.html',
  styleUrl: './identify.component.css'
})
export class IdentifyComponent {
  @Input() personalInfo!: PersonalInfo;

}
