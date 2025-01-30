import { Component, OnInit, ElementRef, AfterViewInit  } from '@angular/core';
import AOS from 'aos';
import VanillaTilt from 'vanilla-tilt';


@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  ngOnInit() {
    AOS.init();
  }
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const tiltElements = this.elementRef.nativeElement.querySelectorAll('.tilt-element');
    VanillaTilt.init(tiltElements, {
      max: 10,
      speed: 400,
      transition:     true, 
      scale: 1.03,

    });
  }

}
