import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DadosSafrasComponent } from './dados-safras.component';
import { SafraService } from 'src/app/services/safra-service/safra.service';
import { ChartData } from 'src/app/interfaces/ChartData';
import { of } from 'rxjs';

describe('DadosSafrasComponent', () => {
  let component: DadosSafrasComponent;
  let fixture: ComponentFixture<DadosSafrasComponent>;
  let activatedRoute: ActivatedRoute;
  let safraService: SafraService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadosSafrasComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (param: string) => {
                  if (param === 'EstadoID') {
                    return 'estadoIdValue'; // Valor simulado para o parâmetro 'EstadoID'
                  }
                  return null;
                }
              }
            }
          }
        },
        {
          provide: SafraService,
          useValue: {
            request: jasmine.createSpy('request').and.returnValue(of([])) // Simula o retorno vazio do serviço
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosSafrasComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    safraService = TestBed.inject(SafraService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
