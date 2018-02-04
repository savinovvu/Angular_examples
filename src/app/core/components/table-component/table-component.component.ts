import {Component, Inject, OnInit} from '@angular/core';
import {Model} from '../../../model/model-provider/model.service';
import {Product} from '../../../model/entities/product.model';

@Component({
  moduleId: module.id,
  selector: 'paTable',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponent implements OnInit {

  constructor(private model: Model) {
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


}
