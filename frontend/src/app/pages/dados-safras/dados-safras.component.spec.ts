import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { of } from 'rxjs';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { DadosSafrasComponent } from './dados-safras.component';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

describe('DadosSafrasComponent', () => {
  let component: DadosSafrasComponent;
  let fixture: ComponentFixture<DadosSafrasComponent>;

  beforeEach(async () => {
    const activatedRouteMock = {
      snapshot: {
        paramMap: {
          get: (param: string) => ''
        }
      }
    };

    await TestBed.configureTestingModule({
      declarations: [
        DadosSafrasComponent,
        HeaderComponent,
        LoaderComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ],
      imports: [HttpClientModule] // Adicionado HttpClientModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosSafrasComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
