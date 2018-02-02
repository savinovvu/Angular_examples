import {Directive, Host, HostBinding, Inject, InjectionToken, Optional} from '@angular/core';

export const VALUE_SERVICE = new InjectionToken('value_service');

@Directive({
  selector: '[paDisplayValue]',
  // providers: [{ provide: VALUE_SERVICE, useValue: "Apples" }]
})
export class PaDisplayValueDirective {


  constructor(@Inject(VALUE_SERVICE) @Host() @Optional() serviceValue: string) {
    this.elementContent = serviceValue;
  }

  @HostBinding('textContent')
  elementContent: string;
}
