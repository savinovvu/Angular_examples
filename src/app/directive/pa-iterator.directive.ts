import {
  ChangeDetectorRef, Directive, Input, IterableDiffer, IterableDiffers, OnInit, TemplateRef,
  ViewContainerRef, ViewRef
} from '@angular/core';
import {promise} from "selenium-webdriver";
import Thenable = promise.Thenable;
import {TrackByFunction} from "@angular/core/src/change_detection/differs/iterable_differs";

@Directive({
  selector: '[paForOf]'
})
export class PaIteratorDirective {
  private differ: IterableDiffer<Object>;
  private views: Map<any, PaIteratorContext> = new Map<any, PaIteratorContext>();

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<Object>,
              private differs: IterableDiffers,
              private changeDetector: ChangeDetectorRef) {
  }

  @Input("paForOf")
  dataSource: any;

  ngOnInit() {
    this.differ = this.differs.find(this.dataSource).create(null);
  }


  ngDoCheck() {
    let changes = this.differ.diff(this.dataSource);
    if (changes != null) {
      let number;
      changes.forEachAddedItem(x =>number++);
      changes.forEachAddedItem(addition => {
        let context = new PaIteratorContext(addition.item,
          addition.currentIndex, number);
        context.view = this.container.createEmbeddedView(this.template,
          context);
        this.views.set(addition.trackById, context);
      });
      let removals = false;
      changes.forEachRemovedItem(removal => {
        removals = true;
        let context = this.views.get(removal.trackById);
        if (context != null) {
          this.container.remove(this.container.indexOf(context.view));
          this.views.delete(removal.trackById);
        }
      });
      if (removals) {
        let index = 0;
        this.views.forEach(context =>
          context.setData(index++, this.views.size));
      }
    }
  }
}

class PaIteratorContext {
  index: number;
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;
  view: ViewRef;

  constructor(public $implicit: any,
              public position: number, total: number) {
    this.setData(position, total);
  }

  setData(index: number, total: number) {
    this.index = index;
    this.odd = index % 2 == 1;
    this.even = !this.odd;
    this.first = index == 0;
    this.last = index == total - 1;
  }
}

