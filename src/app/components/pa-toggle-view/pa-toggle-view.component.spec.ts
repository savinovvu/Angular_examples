import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaToggleViewComponent } from './pa-toggle-view.component';

describe('PaToggleViewComponent', () => {
  let component: PaToggleViewComponent;
  let fixture: ComponentFixture<PaToggleViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaToggleViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaToggleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
