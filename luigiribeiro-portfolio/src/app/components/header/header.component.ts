import { Component } from '@angular/core';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeSwitchComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private globalService: GlobalService) {}

  setPage(page: 'About' | 'Projects' | 'Creativity') {
    this.globalService.setCurrentPage(page);
    console.log(page)
  }
  isCurrentPage(page: 'About' | 'Projects' | 'Creativity'): boolean {
    return this.globalService.currentPage === page;
  }
}
