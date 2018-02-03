import {Component, OnInit} from '@angular/core';
import {selector} from 'rxjs/operator/publish';
import {Product} from '../../../model/entities/product.model';
import {Model} from '../../../model/model-provider/model.service';
import {MODES, SharedState} from '../../state/shared-state.service';
import {NgForm} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'paForm',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  product: Product = new Product();


  constructor(private model: Model, private  state: SharedState) {
  }


  ngOnInit() {
  }

  get editing(): boolean {
    return this.state.mode == MODES.EDIT;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  resetForm() {
    this.product = new Product();
  }

}
