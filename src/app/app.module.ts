import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ProductComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaAttrDirective } from './directives/pa-attr.directive';
import { PaModelDirective } from './directives/pa-model.directive';


@NgModule({
  declarations: [
    ProductComponent,
    PaAttrDirective,
    PaModelDirective,
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
