import { TestBed } from '@angular/core/testing';

import { BovinoculturaService } from './bovinocultura.service';

describe('BovinoculturaService', () => {
  let service: BovinoculturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BovinoculturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
