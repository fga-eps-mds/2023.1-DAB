import { TestBed } from '@angular/core/testing';

import { IbgeApiService } from './ibge-api.service';

describe('IbgeApiService', () => {
  let service: IbgeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IbgeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
