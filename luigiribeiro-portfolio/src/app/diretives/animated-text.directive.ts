import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Directive({
  selector: '[appAnimateOnLangChange]',
  standalone: true
  
})
export class AnimateOnLangChangeDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2, private globalService: GlobalService) {}

  ngOnInit() {
    this.globalService.animationTrigger$.subscribe(() => {
      this.triggerAnimation();
    });
  }

  private triggerAnimation() {


    // Adiciona a classe de animação
    this.renderer.addClass(this.el.nativeElement, 'language-change-animation');

    // Garante que a classe fique aplicada antes de remover
    setTimeout(() => {
      this.renderer.removeClass(this.el.nativeElement, 'language-change-animation');

    }, 500); // Tempo da animação no CSS (0.5s)
  }
}
