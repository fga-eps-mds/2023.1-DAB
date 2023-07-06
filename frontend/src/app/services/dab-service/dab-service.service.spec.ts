import { TestBed } from '@angular/core/testing';

import { DabServiceService } from './dab-service.service';

describe('DabServiceService', () => {
  let service: DabServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DabServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
