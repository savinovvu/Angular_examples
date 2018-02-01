import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'paToggleView',
  templateUrl: './pa-toggle-view.component.html',
  styleUrls: ['./pa-toggle-view.component.css']
})
export class PaToggleViewComponent implements OnInit {
  showContent: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

}
