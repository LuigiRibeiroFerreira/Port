import { Component, Input, OnInit, NgZone } from '@angular/core';
import { PersonalInfo } from '../../models/about.model';

@Component({
  selector: 'app-identify',
  standalone: true,
  imports: [],
  templateUrl: './identify.component.html',
  styleUrl: './identify.component.css'
})
export class IdentifyComponent implements OnInit {
  @Input() personalInfo!: PersonalInfo;

  currentWord: string = '';
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private wordsToUse: string[] = ["Front-End", "Full-Stack", "Angular", "React", "Vue.js", "TypeScript", "Node.js", "Git", "Open to Work!"];

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.startTyping();
  }

  startTyping(): void {
    const words = this.wordsToUse;
    const current = words[this.wordIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.currentWord = current.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.currentWord = current.substring(0, this.charIndex);
    }

    let typingSpeed = this.isDeleting ? 50 : 120;

    if (!this.isDeleting && this.charIndex === current.length) {
      typingSpeed = 1000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % words.length;
      typingSpeed = 500;
    }

    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.ngZone.run(() => this.startTyping()), typingSpeed);
    });
  }
}
