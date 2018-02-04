import { TestBed, inject } from '@angular/core/testing';

import { ModelResolver } from './model-resolver.service';

describe('ModelResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelResolver]
    });
  });

  it('should be created', inject([ModelResolver], (service: ModelResolver) => {
    expect(service).toBeTruthy();
  }));
});
