import {Component, Inject, OnInit} from '@angular/core';
import {Model} from '../../../model/model-provider/model.service';
import {Product} from '../../../model/entities/product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'paTable',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponent implements OnInit {
  category: string = null;

  constructor(private model: Model, activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
      this.category = params['category'] || null;
    });
  }

  ngOnInit() {
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    let products = this.model.getProducts();
    if (!products) {
      return [];
    }
    return products
      .filter(product => this.category == null || product.category == this.category);
  }

  get categories(): string[] {
    let products = this.model.getProducts();
    if (!products) {
      return [];
    }
    return products
      .map(product => product.category)
      .filter((category, index, array) => array.indexOf(category) == index);

  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }


}
