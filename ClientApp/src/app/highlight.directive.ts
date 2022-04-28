import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() value: number;
  @Input() index: number;

  @HostBinding('style.color') textColor = 'black';

  @HostListener('mouseover', ['$event']) mouseHoverHendler(event){
    this.highLight('yellow');
    this.textColor = 'red';
  }

  @HostListener('mouseleave', ['$event']) mouseLeaveHendler(event){
    this.highLight('');
    this.textColor = '';
  }

  ngOnChanges(changes: SimpleChanges){
  this.highLight(this.value !== this.index ? '' : 'red');
  }

    highLight(color: string) {
     // let color = 'red';
     // if(this.value !== this.index) 
      //color = '';
       // this.elementRef.nativeElement.style.backgroundColor = '';
       // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '');
       
      

      // this.elementRef.nativeElement.style.backgroundColor = 'yellow';
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
    }

  constructor(public elementRef: ElementRef, public renderer: Renderer2) { 
    console.log(elementRef);
  }
}
