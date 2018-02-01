import {Directive, EventEmitter, HostBinding, HostListener, Input, Output, SimpleChange} from '@angular/core';

@Directive({
  selector: 'input[paModel]'
})
export class PaModelDirective {

  @Input('paModel')
  modelProperty: string;

  @HostBinding('value')
  fieldValue: string = '';

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes['modelProperty'];
    if (change.currentValue != this.fieldValue) {
      this.fieldValue = changes['modelProperty'].currentValue || '';
    }
  }

  @Output('paModelChange')
  update = new EventEmitter<string>();

  @HostListener('input', ['$event.target.value'])
  updateValue(newValue: string) {
    this.fieldValue = newValue;
    this.update.emit(newValue);
  }
}
