import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { HttpClientModule } from '@angular/common/http'; 


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
        HomeComponent,
        HeaderComponent,
        CardComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ],
      imports: [HttpClientModule] // Adicionado HttpClientModule
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
