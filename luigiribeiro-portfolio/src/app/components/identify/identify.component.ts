import { Component } from '@angular/core';
import { OceanSwitchComponent } from '../ocean-switch/ocean-switch.component';

@Component({
  selector: 'app-identify',
  standalone: true,
  imports: [OceanSwitchComponent],
  templateUrl: './identify.component.html',
  styleUrl: './identify.component.css'
})
export class IdentifyComponent {

}
