import { TestBed, inject } from '@angular/core/testing';

import { UnsavedGuard } from './unsaved-guard.service';

describe('UnsavedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnsavedGuard]
    });
  });

  it('should be created', inject([UnsavedGuard], (service: UnsavedGuard) => {
    expect(service).toBeTruthy();
  }));
});
