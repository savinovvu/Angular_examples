import {Component, OnInit} from '@angular/core';
import {Message} from '../../entity/message.service';
import {MessageService} from '../../service/message.service';
import {NavigationCancel, NavigationEnd, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  moduleId: module.id,
  selector: 'paMessages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  lastMessage: Message;

  constructor(messageService: MessageService, router: Router) {
    messageService.messages.subscribe(message => this.lastMessage = message);
    router.events.filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel)
      .subscribe(event => {
        this.lastMessage = null;
      });
  }

  ngOnInit() {
  }

}
