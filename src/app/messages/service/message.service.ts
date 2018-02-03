import {Injectable} from '@angular/core';
import {Message} from '../entity/message.service';

@Injectable()
export class MessageService {
  private handler: (message: Message) => void;

  constructor() {
  }

  reportMessage(message: Message) {
    if (this.handler != null) {
      this.handler(message);
    }
  }

  registerMessageHandler(handler: (message: Message) => void) {
    this.handler = this.handler;
  }

}
