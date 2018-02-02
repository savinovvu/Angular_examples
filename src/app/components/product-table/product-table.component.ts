import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Model} from '../../repository/model.service';
import {Product} from '../../model/product.model';
import {PaCellColor} from "../../directive/pa-cell-color.directive";

@Component({
  selector: 'paProductTable',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input("model")
  dataModel: Model;

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }

  dateObject: Date = new Date(2020, 1, 20);
  dateString: string = "2020-02-20T00:00:00.000Z";
  dateNumber: number = 1582156800000;

}