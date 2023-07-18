import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { SafraService } from './safra.service';

describe('SafraService', () => {
  let service: SafraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule] // Adicionado HttpClientModule
    });
    service = TestBed.inject(SafraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
