import { HeaderComponent } from 'src/app/components/header/header.component';
import { MapComponent } from 'src/app/components/map/map.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HomeSafraComponent } from './home-safra.component';

describe('HomeSafraComponent', () => {
  let component: HomeSafraComponent;
  let fixture: ComponentFixture<HomeSafraComponent>;

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
        HomeSafraComponent,
        HeaderComponent,
        HomeSafraComponent,
        MapComponent,
        
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSafraComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
