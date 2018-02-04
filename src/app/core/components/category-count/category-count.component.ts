import {ChangeDetectorRef, Component, DoCheck, KeyValueDiffer, KeyValueDiffers, OnInit} from '@angular/core';
import {Model} from '../../../model/model-provider/model.service';

@Component({
  selector: 'paCategoryCount',
  templateUrl: './category-count.component.html',
  styleUrls: ['./category-count.component.css']
})
export class CategoryCountComponent implements OnInit, DoCheck {
  private differ: KeyValueDiffer<any, any>;
  count: number = 0;

  constructor(private model: Model,
              private keyValueDiffers: KeyValueDiffers,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
  }

  ngDoCheck(): void {
    if(this.differ.diff(this.model.getProducts()) !== null){
      this.count = this.model.getProducts()
        .map(product => product.category)
        .filter((category, index, array) => array.indexOf(category) == index).length;
    }
  }
}
