import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ProductFormGroup} from '../../formValidators/productFormGroup';
import {Product} from '../../model/product.model';
import {Model} from "../../repository/model.service";

@Component({
  selector: 'paProductForm',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent implements OnInit {
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

/*
  @Output('paNewProduct')
  newProductEvent = new EventEmitter<Product>();
*/

  constructor(private model:Model) {
  }

  ngOnInit() {
  }

  submitForm(form: any) {
    this.formSubmitted = true;
    if (form.valid) {
      // this.newProductEvent.emit(this.newProduct);
      this.model.saveProduct(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSubmitted = false;
    }
  }
}
