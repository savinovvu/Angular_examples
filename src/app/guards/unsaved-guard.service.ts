import {Injectable} from '@angular/core';
import {MessageService} from '../messages/service/message.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {FormComponent} from '../core/components/form/form.component';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Message} from '../messages/entity/message.service';

@Injectable()
export class UnsavedGuard {

  constructor(private messages: MessageService,
              private router: Router) {
  }


  canDeactivate(component: FormComponent, route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (component.editing) {
      if (['name', 'category', 'price']
          .some(prop => component.product[prop]
            != component.originalProduct[prop])) {
        let subject = new Subject<boolean>();
        let responses: [[string, (string) => void]] = [
          ['Yes', () => {
            subject.next(true);
            subject.complete();
          }],
          ['No', () => {
            this.router.navigateByUrl(this.router.url);
            subject.next(false);
            subject.complete();
          }]
        ];
        this.messages.reportMessage(new Message('Discard Changes?',
          true, responses));
        return subject;
      }
    }
    return true;

  }
}
