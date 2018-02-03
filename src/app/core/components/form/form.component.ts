import {Component, DoCheck, Inject, OnInit} from '@angular/core';
import {selector} from 'rxjs/operator/publish';
import {Product} from '../../../model/entities/product.model';
import {Model} from '../../../model/model-provider/model.service';
import {MODES, SHARED_STATE, SharedState} from '../../state/shared-state.service';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

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

  constructor(private model: Model, @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
    stateEvents.subscribe((update) => {
      this.product = new Product();
      if (update.id != undefined) {
        Object.assign(this.product, this.model.getProduct(update.id));
      }
      this.editing = update.mode == MODES.EDIT;
    });
  }


  ngOnInit() {
  }


  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
      this.editing = false;
    }
  }

  resetForm() {
    this.product = new Product();
  }


}
