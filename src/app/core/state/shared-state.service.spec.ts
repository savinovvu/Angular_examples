import { TestBed, inject } from '@angular/core/testing';

import { SharedState } from './shared-state.service';

describe('SharedState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedState]
    });
  });

  it('should be created', inject([SharedState], (service: SharedState) => {
    expect(service).toBeTruthy();
  }));
});
