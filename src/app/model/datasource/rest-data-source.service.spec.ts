import { TestBed, inject } from '@angular/core/testing';

import { RestDataSource } from './rest-data-source.service';

describe('RestDataSource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestDataSource]
    });
  });

  it('should be created', inject([RestDataSource], (service: RestDataSource) => {
    expect(service).toBeTruthy();
  }));
});
