import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-ocean-switch',
  standalone: true,
  imports: [],
  templateUrl: './ocean-switch.component.html',
  styleUrl: './ocean-switch.component.css'
})

export class OceanSwitchComponent {
  
  isOceanTheme: boolean = false;

  constructor(private globalService: GlobalService) {
    this.isOceanTheme = this.globalService.theme === 'ocean';
  }
  

  toggleTheme(): void {
    this.isOceanTheme = !this.isOceanTheme;
    this.globalService.setTheme(this.isOceanTheme ? 'ocean' : 'dark');
    
  }
}
