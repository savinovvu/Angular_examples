import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {ModelModule} from './model/model.module';
import {MessageModule} from './messages/messages.module';
import {TableComponent} from './core/components/table-component/table-component.component';
import {FormComponent} from './core/components/form/form.component';
import {MessageComponent} from './messages/components/message/message.component';


@NgModule({

  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, CoreModule, ModelModule, MessageModule
  ],
  providers: [],

  bootstrap: [TableComponent, FormComponent, MessageComponent]
})
export class AppModule {
}
