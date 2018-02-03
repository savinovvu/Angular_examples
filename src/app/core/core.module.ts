import {NgModule} from '@angular/core';
import {TableComponent} from './components/table-component/table-component.component';
import {FormComponent} from './components/form/form.component';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {BrowserModule} from '@angular/platform-browser';
import {MODES, SHARED_STATE, SharedState} from './state/shared-state.service';
import {Subject} from 'rxjs/Subject';
import {StatePipe} from './pipes/state.pipe';
import {MessageModule} from '../messages/messages.module';
import {Model} from '../model/model-provider/model.service';
import {MessageService} from '../messages/service/message.service';
import {Message} from '../messages/entity/message.service';


@NgModule({
  imports: [
    BrowserModule, FormsModule, ModelModule, MessageModule
  ],
  declarations: [TableComponent, FormComponent, StatePipe],
  exports: [TableComponent, FormComponent, ModelModule],

  providers: [{
    provide: SHARED_STATE,
    deps: [MessageService, Model],
    useFactory: (messageService, model) =>  getFactory(messageService, model)
  }]

})

export class CoreModule {
}

function getFactory(messageService, model) {
  let subject = new Subject<SharedState>();
  subject.subscribe(message => reportMessageObserver(messageService, message, model));
  return subject;
}

function reportMessageObserver(messageService, message, model) {
  messageService.reportMessage(
    getMessage(message, model));
}

function getMessage(message, model) {
  return new Message(MODES[message.mode] + (message.id != undefined
    ? ` ${model.getProduct(message.id).name}` : ''));
}
