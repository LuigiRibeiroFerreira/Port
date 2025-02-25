import { Component, OnInit, viewChildren,QueryList,ElementRef,AfterViewInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import { HeaderContentService } from '../../services/content/header-content.service'; 
import { HeaderData } from '../../models/header.model';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeSwitchComponent, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(public globalService: GlobalService, private headerContentService: HeaderContentService) {
  
  }
  headerData: any = {};
  
  ngOnInit() {
    this.headerContentService.getHeaderData().subscribe(data => {
      this.headerData = data;
    });
  }
  
}
