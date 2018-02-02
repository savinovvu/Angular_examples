import {Component, Input, OnInit} from '@angular/core';
import {DiscountService} from "../../services/discount.service";

@Component({
  selector: 'paDiscountDisplay',
  templateUrl: './pa-discount-display.component.html',
  styleUrls: ['./pa-discount-display.component.css']
})
export class PaDiscountDisplayComponent implements OnInit {

  constructor( private discounter: DiscountService) { }

  ngOnInit() {
  }

}
