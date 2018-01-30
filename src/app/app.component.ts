import {ApplicationRef, Component} from '@angular/core';
import {Model} from './repository/model.service';
import {Product} from './model/product.model';
import {NgForm} from '@angular/forms';
import {ProductFormGroup} from './formValidators/productFormGroup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ProductComponent {
  model: Model = new Model();
  selectedProduct: string;
  newProduct: Product = new Product();
  formSubmitted: boolean = false;
  form: ProductFormGroup = new ProductFormGroup();

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }


  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(product: Product) {
    console.log('New Product: ' + this.jsonProduct);
  }


}


