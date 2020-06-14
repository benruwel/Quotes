import { Quote } from './../models/quote';
import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  @Input() quotes : Quote;

  constructor(private elem : ElementRef) {}

  @HostListener ('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener ('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color : string) {
    this.elem.nativeElement.style.background = color;
  }

  

}
