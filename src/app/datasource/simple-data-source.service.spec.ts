import { TestBed, inject } from '@angular/core/testing';

import { SimpleDataSource } from './simple-data-source.service';

describe('SimpleDataSource', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimpleDataSource]
    });
  });

  it('should be created', inject([SimpleDataSource], (service: SimpleDataSource) => {
    expect(service).toBeTruthy();
  }));
});
