import {NgModule} from '@angular/core';
import {TableComponent} from './components/table-component/table-component.component';
import {FormComponent} from './components/form/form.component';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {StatePipe} from './pipes/state.pipe';
import {MessageModule} from '../messages/messages.module';
import {RouterModule} from '@angular/router';
import { ProductCountComponent } from './components/product-count/product-count.component';
import { CategoryCountComponent } from './components/category-count/category-count.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  imports: [
    BrowserModule, FormsModule, ModelModule, MessageModule, RouterModule
  ],
  declarations: [TableComponent, FormComponent, StatePipe, ProductCountComponent, CategoryCountComponent, NotFoundComponent],
  exports: [TableComponent, FormComponent, ModelModule]
})
export class CoreModule {
}

