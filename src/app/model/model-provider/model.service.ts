import {Injectable} from '@angular/core';
import {Product} from '../entities/product.model';
import {StaticDataSource} from '../datasource/static-data-source.service';
import {RestDataSource} from '../datasource/rest-data-source.service';

@Injectable()
export class Model {
  private products: Product[];
  private locator = (product: Product, id: number) => product.id == id;

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getData().subscribe(data => this.products = data);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(product => this.locator(product, id));
  }

  saveProduct(product: Product) {
    if (product.id == 0 || product.id == null) {
      this.dataSource.saveProduct(product)
        .subscribe(product => this.products.push(product));
    } else {
      this.dataSource.updateProduct(product).subscribe(product => {
        let index = this.products
          .findIndex(item => this.locator(item, product.id));
        this.products.splice(index, 1, product);
      });
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(() => {
      let index = this.products.findIndex(product => this.locator(product, id));
      if (index > -1) {
        this.products.splice(index, 1);
      }
    });
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }

  public getNextProductId(id: number): number {
    let index = this.products.findIndex(product => this.locator(product, id));
    if (index > -1) {
      let nextIndexOfProducts = (this.products.length) > index + 2 ? index + 1 : 0;
      return this.products[nextIndexOfProducts].id;
    } else {
      return id || 0;
    }
  }

  public getPreviosProductId(id: number): number {
    let index = this.products.findIndex(product => this.locator(product, id));
    if (index > -1) {
      let PreviosIndexOfProducts = (index > 0) ? index - 1 : this.products.length - 1;
      return this.products[PreviosIndexOfProducts].id;
    } else {
      return id || 0;
    }
  }

}
