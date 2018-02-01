import {
  Attribute, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output,
  SimpleChange
} from '@angular/core';
import {Product} from '../model/product.model';

@Directive({
  selector: '[pa-attr]'
})
export class PaAttrDirective implements OnInit {

  @Input('pa-attr')
  @HostBinding('class')
  bgClass: string;

  @Input('pa-product')
  product: Product;

  @Output('pa-category')
  click = new EventEmitter<string>();

  /*
  constructor(element: ElementRef, @Attribute("pa-attr-class") bgClass:string) {

  constructor(element: ElementRef, @Attribute("pa-attr") bgClass:string) {
    element.nativeElement.classList.add(bgClass ||'bg-success');
  }
  */

  constructor(private element: ElementRef) {
  /*
  this.element.nativeElement.addEventListener('click', e => {
      if (this.product != null) {
        this.click.emit(this.product.category);
      }
    });
    */
  }



  ngOnInit() {
    this.element.nativeElement.classList.add(this.bgClass || 'bg-success');
  }

  @HostListener("click")
  triggerCustomEvent(){
    if(this.product != null) {
      this.click.emit(this.product.category);
    }
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes['bgClass'];
    let classList = this.element.nativeElement.classList;
    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }

}
