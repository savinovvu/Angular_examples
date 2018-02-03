import {NgModule} from '@angular/core';
import {MessageComponent} from './components/message/message.component';
import {BrowserModule} from '@angular/platform-browser';
import {MessageService} from './service/message.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent],
  providers: [MessageService]
})
export class MessagesModule {
}
