import {Directive, Input, SimpleChange, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[paIf]'
})
export class PaStructureDirective {

  constructor(private container: ViewContainerRef,
              private  template: TemplateRef<Object>) {
  }

  @Input("paIf")
  expressionResult: boolean;

  ngOnChanges(changes: {[property: string]:SimpleChange}){
    let change = changes["expressionResult"];
    /*!change.isFirstChange() && */
    if(change.currentValue) {
      this.container.createEmbeddedView(this.template);
    }else {
      this.container.clear();
    }
  }

}
