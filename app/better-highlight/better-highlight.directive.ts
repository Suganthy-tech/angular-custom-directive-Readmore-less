import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';
@Directive({
  selector: '[appBetterHighlight]',
})
export class betterHighlightDirective {
  @Input() text: string;
  displayString: string;
  hidden: boolean = true;
  @Input() highlightColor: string = 'pink';
  paragraphElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('click', ['event']) onClick(event) {
    this.hidden = !this.hidden;
    this.removeChildNode();
    this.slicetext();
    this.createChildNode();
  }

  ngOnInit() {
    this.slicetext();
    this.createChildNode();
  }
  slicetext() {
    this.displayString = this.hidden
      ? this.text.slice(0, 20) + ' Read More'
      : this.text + 'Hide';
  }
  createChildNode() {
    const TextElement = this.renderer.createText(this.displayString);
    this.paragraphElement = this.renderer.createElement('p');
    this.renderer.appendChild(this.paragraphElement, TextElement);
    this.renderer.appendChild(
      this.elementRef.nativeElement,
      this.paragraphElement
    );
  }
  removeChildNode() {
    this.renderer.removeChild(
      this.elementRef.nativeElement,
      this.paragraphElement
    );
  }
}
