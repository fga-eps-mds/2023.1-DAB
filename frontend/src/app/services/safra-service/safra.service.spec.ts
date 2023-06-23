import { TestBed } from '@angular/core/testing';

import { SafraService } from './safra.service';

describe('SafraService', () => {
  let service: SafraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
