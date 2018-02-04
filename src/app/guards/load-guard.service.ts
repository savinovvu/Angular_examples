import {Injectable} from '@angular/core';
import {MessageService} from '../messages/service/message.service';
import {CanLoad, Route, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Message} from '../messages/entity/message.service';

@Injectable()
export class LoadGuard implements CanLoad {
  private loaded: boolean = false;

  constructor(private messages: MessageService,
              private router: Router) {
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    return this.loaded || new Promise<boolean>((resolve, reject) => {
      let responses: [[string, (string) => void]] = [
        ['Yes', () => {
          this.loaded = true;
          resolve(true);
        }],
        ['No', () => {
          this.router.navigateByUrl(this.router.url);
          resolve(false);
        }]
      ];

      this.messages.reportMessage(
        new Message('Do you want to load the module?',
          false, responses));
    });
  }
}
