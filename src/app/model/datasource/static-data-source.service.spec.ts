import { TestBed, inject } from '@angular/core/testing';

import { StaticDataSource } from './static-data-source.service';

describe('StaticDataSource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticDataSource]
    });
  });

  it('should be created', inject([StaticDataSource], (service: StaticDataSource) => {
    expect(service).toBeTruthy();
  }));
});
