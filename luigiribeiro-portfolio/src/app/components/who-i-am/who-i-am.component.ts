import { Component, Input } from '@angular/core';
import { About } from '../../models/about.model';
@Component({
  selector: 'app-who-i-am',
  standalone: true,
  imports: [],
  templateUrl: './who-i-am.component.html',
  styleUrl: './who-i-am.component.css'
})
export class WhoIAmComponent {
  @Input() about!: About;
}
