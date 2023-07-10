import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AvinoculturaService } from './avinocultura.service';
import { ChartData } from 'src/app/interfaces/ChartData';

describe('AvinoculturaService', () => {
  let service: AvinoculturaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AvinoculturaService]
    });

    service = TestBed.inject(AvinoculturaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
