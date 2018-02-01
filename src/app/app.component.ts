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

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }
}


