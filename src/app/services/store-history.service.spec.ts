import { TestBed } from '@angular/core/testing';

import { StoreHistoryService } from './store-history.service';

describe('StoreHistoryService', () => {
  let service: StoreHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
