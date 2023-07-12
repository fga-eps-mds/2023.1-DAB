import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SuinoculturaService } from './suinocultura.service';

describe('SuinoculturaService', () => {
  let service: SuinoculturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule] // Adicionado HttpClientModule
    });
    service = TestBed.inject(SuinoculturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
