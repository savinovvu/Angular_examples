import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../repository/model.service';
import {Product} from '../../model/product.model';

@Component({
  selector: 'paProductTable',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  @Input('model')
  dataModel: Model;


  constructor() {
  }

  ngOnInit() {
  }

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  getProducts():Product[]{
    return this.dataModel.getProducts();
  }

  deleteProduct(key:number){
    this.dataModel.deleteProduct(key);
  }

  showTable: boolean = true;

}
