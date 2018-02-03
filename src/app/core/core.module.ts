import { NgModule } from '@angular/core';
import { TableComponent } from './components/table-component/table-component.component';
import { FormComponent } from './components/form/form.component';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {SharedState} from './state/shared-state.service';

@NgModule({
  imports: [
    BrowserModule, FormsModule, ModelModule
  ],
  declarations: [TableComponent, FormComponent],
  exports: [TableComponent, FormComponent, ModelModule],
  providers: [SharedState]
})
export class CoreModule { }
