import {Injectable} from '@angular/core';
import {MessageService} from '../messages/service/message.service';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Message} from '../messages/entity/message.service';

@Injectable()
export class TermsGuard implements CanActivate, CanActivateChild {

  constructor(private messages: MessageService, private  router: Router) {
  }

  /*Уточненяющий вопрос создания продукта*/
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (route.params['mode'] == 'create') {

      return new Promise<boolean>((resolve, reject) => {
        let responses: [[string, (string) => void]] = [
          ['Yes', () => {
            resolve(true);
          }],
          ['No', () => {
            this.router.navigateByUrl(this.router.url);
            resolve(false);
          }]
        ];
        this.messages.reportMessage(
          new Message('Do you accept the terms & conditions?',
            false, responses));
      });
    } else {
      return true;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
    /*if (childRoute.url.length > 0 && childRoute.url[childRoute.url.length - 1].path == 'categories') {
      return new Promise<boolean>((resolve, reject) => {
        let responses: [[string, (string) => void]] = [
          ['Yes', () => {
            resolve(true);
          }],
          ['No ', () => {
            this.router.navigateByUrl(state.url.replace('categories',
              'products'));
            resolve(false);
          }]
        ];
        this.messages.reportMessage(
          new Message('Do you want to see the categories component?',
            false, responses));
      });
    } else {
      return true;
    }*/
  }

}
