import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ProductComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { PaToggleViewComponent } from './components/pa-toggle-view/pa-toggle-view.component';
import {PaAttrDirective} from './directive/pa-attr.directive';
import {PaStructureDirective} from './directive/pa-structure.directive';
import {PaIteratorDirective} from './directive/pa-iterator.directive';
import {PaCellColor} from './directive/pa-cell-color.directive';
import {PaCellColorSwitcher} from './directive/pa-cell-color-switcher.directive';


@NgModule({
  declarations: [
    ProductComponent,
    ProductTableComponent,
    ProductFormComponent,
    PaToggleViewComponent,
    PaAttrDirective,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColorSwitcher,
    PaCellColor,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
