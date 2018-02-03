import {ContentChild, ContentChildren, Directive, Input, QueryList, SimpleChange} from '@angular/core';
import {PaCellColor} from "./pa-cell-color.directive";
import {LogService} from '../services/log.service';

@Directive({
  selector: 'table',
  providers:[LogService]
})
export class PaCellColorSwitcher {

  @Input("paCellDarkColor")
  modelProperty: boolean;
  /*
    @ContentChild(PaCellColor)
    contentChild: PaCellColor;
  */
  /*
    ngOnChanges(changes: { [property: string]: SimpleChange }) {
      if (this.contentChild != null) {
        this.contentChild.setColor(changes["modelProperty"].currentValue);
      }*/

  @ContentChildren(PaCellColor)
  contentChildren: QueryList<PaCellColor>;

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    this.updateContentChildren(changes["modelProperty"].currentValue);
  }

  private updateContentChildren(dark: boolean) {
    if (this.contentChildren != null && dark != undefined) {
      this.contentChildren.forEach((child, index) => {
        child.setColor(index % 2 ? dark : !dark);
      });
    }
  }

  ngAfterContentInit(){
    this.contentChildren.changes.subscribe(() => {
      setTimeout(() => this.updateContentChildren(this.modelProperty), 0);
    });
  }
}
