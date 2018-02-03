import {Injectable} from '@angular/core';
import {Message} from '../entity/message.service';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageService {
  private subject = new Subject<Message>();

  constructor() {
  }


  reportMessage(message: Message) {
    this.subject.next(message);
  }

  get messages(): Observable<Message> {
    return this.subject;
  }

}
