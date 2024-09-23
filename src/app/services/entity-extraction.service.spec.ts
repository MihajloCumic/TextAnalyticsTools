import { TestBed } from '@angular/core/testing';

import { EntityExtractionService } from './entity-extraction.service';

describe('EntityExtractionService', () => {
  let service: EntityExtractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityExtractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
