import {Injectable} from '@angular/core';
import {Model} from '../model-provider/model.service';
import {RestDataSource} from '../datasource/rest-data-source.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Product} from '../entities/product.model';
import {Observable} from 'rxjs/Observable';
import {MessageService} from '../../messages/service/message.service';
import {Message} from '../../messages/entity/message.service';

@Injectable()
export class ModelResolver implements Resolve<Product[]> {

  constructor(private model: Model,
              private dataSource: RestDataSource,
              private messages: MessageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> | Promise<Product[]> | Product[] {

    if (!this.model.getProducts() || this.model.getProducts().length == 0) {
      this.messages.reportMessage(new Message('Loading data...'));
      return this.dataSource.getData();
    }
  }
}
