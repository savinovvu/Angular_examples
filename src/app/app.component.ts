import {ApplicationRef, Component} from '@angular/core';
import {Model} from './repository/model.service';
import {Product} from './model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ProductComponent {
  public model: Model = new Model();
  fontSizeWithUnits: string = '30px';
  fontSizeWithoutUnits: string = '30';
  targetName: string = 'Kayak';


  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }
  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getProductCount(): number {
    console.log("getProductCount invoked");
    return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  get nextProduct(): Product {
    return this.model.getProducts().shift();
  }



}


