import {ApplicationRef, Component} from '@angular/core';
import {Model} from './repository/model.service';
import {Product} from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ProductComponent {
  model: Model = new Model();
  selectedProduct: string;

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product.name == this.selectedProduct;
  }


}


