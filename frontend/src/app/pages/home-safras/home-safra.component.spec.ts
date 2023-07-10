import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HomeSafraComponent } from './home-safra.component';

describe('HomeSafraComponent', () => {
  let component: HomeSafraComponent;
  let fixture: ComponentFixture<HomeSafraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeSafraComponent,
        HeaderComponent
      ]
    });
    fixture = TestBed.createComponent(HomeSafraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
