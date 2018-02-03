import {Injectable} from '@angular/core';
import {Product} from '../entities/product.model';
import {StaticDataSource} from '../datasource/static-data-source.service';

@Injectable()
export class Model {
  private products: Product[];
  private locator = (product: Product, id: number) => product.id == id;

  constructor(private dataSource: StaticDataSource) {
    this.products = new Array<Product>();
    this.dataSource.getData().forEach(product => this.products.push(product));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(product => this.locator(product, id));
  }

  saveProduct(product: Product) {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateID();
      this.products.push(product);
    } else {
      let index = this.products
        .findIndex(p => this.locator(p, product.id));
      this.products.splice(index, 1, product);
    }
  }

  deleteProduct(id: number) {
    let index = this.products.findIndex(product => this.locator(product, id));
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
