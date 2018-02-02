import {
  ChangeDetectorRef, Directive, Input, KeyValueDiffer, KeyValueDiffers, OnInit,
  SimpleChange
} from '@angular/core';
import {DiscountService} from "../services/discount.service";

@Directive({
  selector: 'td[pa-price]',
  exportAs: "discount"
})
export class PadiscountAmountDirectiveDirective implements OnInit {
  private differ: KeyValueDiffer<any,any>;

  constructor(private  keyValueDiffers: KeyValueDiffers,
              private changeDetector: ChangeDetectorRef,
              private discount: DiscountService) {
  }

  @Input("pa-price")
  originalPrice: number;

  ngOnInit(): void {
    this.differ = this.keyValueDiffers.find(this.discount).create();
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    if (changes["originalPrice"] != null) {
      this.updateValue();
    }
  }

  discountAmount: number;

  private updateValue() {
    this.discountAmount = this.originalPrice - this.discount.applyDiscount(this.originalPrice);
  }
}
