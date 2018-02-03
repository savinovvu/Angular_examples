import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductTableComponent} from './product-table/product-table.component';
import {ProductFormComponent} from '../model/product-form/product-form.component';
import {PaDiscountEditorComponent} from './pa-discount-editor/pa-discount-editor.component';
import {PaDiscountDisplayComponent} from './pa-discount-display/pa-discount-display.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [PaDiscountDisplayComponent, PaDiscountEditorComponent,
    ProductFormComponent, ProductTableComponent],
  exports: [ProductFormComponent, ProductTableComponent]
})
export class ComponentsModule { }
