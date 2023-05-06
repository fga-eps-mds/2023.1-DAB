import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvinoculturaComponent } from './avinocultura.component';

describe('AvinoculturaComponent', () => {
  let component: AvinoculturaComponent;
  let fixture: ComponentFixture<AvinoculturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvinoculturaComponent]
    });
    fixture = TestBed.createComponent(AvinoculturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
