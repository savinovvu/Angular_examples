import { TestBed, inject } from '@angular/core/testing';

import { Model } from './model.service';

describe('Model', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Model]
    });
  });

  it('should be created', inject([Model], (service: Model) => {
    expect(service).toBeTruthy();
  }));
});
