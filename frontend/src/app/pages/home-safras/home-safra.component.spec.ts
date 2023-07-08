import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSafraComponent } from './home-safra.component';

describe('HomeSafraComponent', () => {
  let component: HomeSafraComponent;
  let fixture: ComponentFixture<HomeSafraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSafraComponent]
    });
    fixture = TestBed.createComponent(HomeSafraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
