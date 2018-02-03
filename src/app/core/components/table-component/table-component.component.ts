import {Component, Inject, OnInit} from '@angular/core';
import {Model} from '../../../model/model-provider/model.service';
import {MODES, SHARED_STATE, SharedState} from '../../state/shared-state.service';
import {Product} from '../../../model/entities/product.model';
import {Observer} from 'rxjs/Observer';

@Component({
  moduleId: module.id,
  selector: 'paTable',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponent implements OnInit {

  constructor(private model: Model, @Inject(SHARED_STATE) private observer: Observer<SharedState>) {
  }

  ngOnInit() {
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  editProduct(key: number) {
    this.observer.next(new SharedState(MODES.EDIT, key));
  }

  createProduct() {
    this.observer.next(new SharedState(MODES.CREATE));
  }

}
