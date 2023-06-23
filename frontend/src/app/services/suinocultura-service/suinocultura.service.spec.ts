import { TestBed } from '@angular/core/testing';

import { SuinoculturaService } from './suinocultura.service';

describe('SuinoculturaService', () => {
  let service: SuinoculturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuinoculturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
