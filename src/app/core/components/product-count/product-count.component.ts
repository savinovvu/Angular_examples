import {ChangeDetectorRef, Component, DoCheck, KeyValueDiffer, KeyValueDiffers, OnInit} from '@angular/core';
import {Model} from '../../../model/model-provider/model.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'paProductCount',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})
export class ProductCountComponent implements OnInit, DoCheck {
  private differ: KeyValueDiffer<any, any>;
  count: number = 0;
  private category: string;

  constructor(private  model: Model,
              private keyValueDiffers: KeyValueDiffers,
              activeRoute: ActivatedRoute) {
    activeRoute.pathFromRoot.forEach(route => route.params.subscribe(
      params => {
        if (params['category'] != null) {
          this.category = params['category'];
          this.updateCount();
        }
      }
    ));
  }

  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
  }

  ngDoCheck(): void {
    if (this.differ.diff(this.model.getProducts()) != null) {
      this.updateCount();
    }
  }

  private updateCount() {
    this.count = this.model.getProducts()
      .filter(product => this.category == null || product.category == this.category)
      .length;
  }
}
