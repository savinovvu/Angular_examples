import {Component, DoCheck, Inject, OnInit} from '@angular/core';
import {Product} from '../../../model/entities/product.model';
import {Model} from '../../../model/model-provider/model.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'paForm',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  product: Product = new Product();
  originalProduct = new Product();
  editing: boolean = false;
  model: Model;

  constructor(model: Model,
              activeRoute: ActivatedRoute,
              private router: Router) {

    this.model = model;
    activeRoute.params.subscribe(params => {
      this.editing = params['mode'] == 'edit';
      let id = params['id'];
      if (id != null) {
        Object.assign(this.product, model.getProduct(id || new Product()));
        Object.assign(this.originalProduct, this.product);
      }
    });
  }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.originalProduct = this.product;
      this.router.navigateByUrl('/');
    }
  }

 /* resetForm() {
    this.product = new Product();
  }*/




}
