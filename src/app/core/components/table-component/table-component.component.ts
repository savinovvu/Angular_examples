import {Component, OnInit} from '@angular/core';
import {Model} from '../../../model/model-provider/model.service';
import {MODES, SharedState} from '../../state/shared-state.service';
import {Product} from '../../../model/entities/product.model';

@Component({
  moduleId: module.id,
  selector: 'paTable',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponent implements OnInit {

  constructor(private model: Model, private  state: SharedState) {
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
    this.state.id = key;
    this.state.mode = MODES.EDIT;
  }

  createProduct() {
    this.state.id = undefined;
    this.state.mode = MODES.CREATE;
  }

}
