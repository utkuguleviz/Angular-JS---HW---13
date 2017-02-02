import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  constructor(e: ElementRef) { 
     console.log("UPPER");
     e.nativeElement.style.textTransform = "uppercase";    
  }

}
