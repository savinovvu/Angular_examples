import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ProductComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { PaToggleViewComponent } from './components/pa-toggle-view/pa-toggle-view.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductTableComponent,
    ProductFormComponent,
    PaToggleViewComponent,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
