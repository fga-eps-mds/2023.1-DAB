import { TestBed } from '@angular/core/testing';
import { IbgeApiService } from './ibge-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IbgeApiService', () => {
  let service: IbgeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IbgeApiService] 
    });
    service = TestBed.inject(IbgeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
