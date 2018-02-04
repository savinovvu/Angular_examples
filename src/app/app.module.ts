import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CoreModule} from './core/core.module';
import {MessageModule} from './messages/messages.module';
import { AppComponent } from './app-component/app.component';
import {routing} from './app.routing';


@NgModule({

  imports: [
  BrowserModule, CoreModule, MessageModule, routing
  ],
  providers: [],

  bootstrap: [AppComponent],

  declarations: [AppComponent]
})
export class AppModule {
}
