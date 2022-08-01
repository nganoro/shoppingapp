import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @HostBinding('style.font-weight') fontweight: string;
  @Input() highlightColor: string;
  @HostBinding('style.color') fontcolor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')
    // this.fontweight = 'bold';
    this.fontcolor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    this.fontweight = 'normal';
    this.fontcolor = 'black'
  }


}
