import { Component, OnInit} from '@angular/core';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import { HeaderContentService } from '../../services/content/header-content.service'; 
import { HeaderData } from '../../models/header.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeSwitchComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(private globalService: GlobalService, private headerContentService: HeaderContentService) {}
  headerData!: HeaderData;
  ngOnInit(): void {
    this.headerData = this.headerContentService.getHeaderData();
  }
  setPage(page: 'About' | 'Projects' | 'Creativity') {
    this.globalService.setCurrentPage(page);
    console.log(page)
  }
  isCurrentPage(page: 'About' | 'Projects' | 'Creativity'): boolean {
    return this.globalService.currentPage === page;
  }
}
