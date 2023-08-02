import {Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector:'[appBasicHighlight]'
})
export class basicHighlightDirective{
  constructor(private elementRef :ElementRef){

  }

  ngOnInit(){
    this.elementRef.nativeElement.style.background = "blue";
  }

}