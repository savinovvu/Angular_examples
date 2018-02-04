import { TestBed, inject } from '@angular/core/testing';

import { TermsGuard } from './guard.service';

describe('TermsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TermsGuard]
    });
  });

  it('should be created', inject([TermsGuard], (service: TermsGuard) => {
    expect(service).toBeTruthy();
  }));
});
