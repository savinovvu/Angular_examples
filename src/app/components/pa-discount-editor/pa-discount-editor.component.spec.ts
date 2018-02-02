import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaDiscountEditorComponent } from './pa-discount-editor.component';

describe('PaDiscountEditorComponent', () => {
  let component: PaDiscountEditorComponent;
  let fixture: ComponentFixture<PaDiscountEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaDiscountEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaDiscountEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
