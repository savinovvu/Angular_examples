import {Component, OnInit} from '@angular/core';
import {Message} from '../../entity/message.service';
import {MessageService} from '../../service/message.service';

@Component({
  moduleId: module.id,
  selector: 'paMessages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  lastMessage: Message;

  constructor(messageService: MessageService) {
    messageService.messages.subscribe(message => this.lastMessage = message);
  }

  ngOnInit() {
  }

}
