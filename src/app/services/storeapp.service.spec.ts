import { TestBed } from '@angular/core/testing';

import { StoreappService } from './storeapp.service';

describe('StoreappService', () => {
  let service: StoreappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
