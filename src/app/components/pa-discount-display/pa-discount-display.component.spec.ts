import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaDiscountDisplayComponent } from './pa-discount-display.component';

describe('PaDiscountDisplayComponent', () => {
  let component: PaDiscountDisplayComponent;
  let fixture: ComponentFixture<PaDiscountDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaDiscountDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaDiscountDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
