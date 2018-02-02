import {Component, EventEmitter, Inject, OnInit, Output, SkipSelf, ViewEncapsulation} from '@angular/core';
import {ProductFormGroup} from '../../formValidators/productFormGroup';
import {Product} from '../../model/product.model';
import {Model} from "../../repository/model.service";
import {VALUE_SERVICE} from '../../directive/pa-display-value.directive';

@Component({
  selector: 'paProductForm',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [{ provide: VALUE_SERVICE, useValue: "Oranges" }]
})
export class ProductFormComponent implements OnInit {
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

/*
  @Output('paNewProduct')
  newProductEvent = new EventEmitter<Product>();
*/

  constructor(private model:Model, @Inject(VALUE_SERVICE) @SkipSelf() serviceValue: string) {
    console.log('Service Value: ' + serviceValue);
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
