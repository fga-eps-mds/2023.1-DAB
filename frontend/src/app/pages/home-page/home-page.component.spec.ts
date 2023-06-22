import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        HeaderComponent,
        CarouselComponent
      ]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Home Page', () => {
    expect(component).toBeTruthy();
  });
  
  it('should update data items correctly', fakeAsync(() => {
    const finalValues = [142, 293, 36, 47];

    component.updateDataItems();

    tick(6000); // Simula a passagem de 6000 milissegundos (duração da animação)

    expect(component.dataItems).toEqual(finalValues);
  }));
});
