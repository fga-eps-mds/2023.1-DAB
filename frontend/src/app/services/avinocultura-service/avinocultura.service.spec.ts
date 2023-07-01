import { TestBed } from '@angular/core/testing';

import { AvinoculturaService } from './avinocultura.service';

describe('AvinoculturaService', () => {
  let service: AvinoculturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvinoculturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
