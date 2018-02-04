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
  lastId: number;
  editing: boolean = false;

  constructor(private model: Model,
              activeRoute: ActivatedRoute,
              private router: Router) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    let id = activeRoute.snapshot.params['id'];
    if (id != null) {
      let name = activeRoute.snapshot.params['name'];
      let category = activeRoute.snapshot.params['category'];
      let price = activeRoute.snapshot.params['price'];

      if (name != null && category != null && price != null) {
        this.product.id = id;
        this.product.name = name;
        this.product.category = category;
        this.product.price = Number.parseFloat(price);
      } else {
        Object.assign(this.product, model.getProduct(id) || new Product());
      }
    }
  }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.router.navigateByUrl('/');
    }
  }

  resetForm() {
    this.product = new Product();
  }


}
