import {Component, Input, OnInit} from '@angular/core';
import {DiscountService} from "../../common/services/discount.service";

@Component({
  selector: 'paDiscountEditor',
  templateUrl: './pa-discount-editor.component.html',
  styleUrls: ['./pa-discount-editor.component.css']
})
export class PaDiscountEditorComponent implements OnInit {

  constructor(private discounter: DiscountService) {
  }

  ngOnInit() {
  }

}
