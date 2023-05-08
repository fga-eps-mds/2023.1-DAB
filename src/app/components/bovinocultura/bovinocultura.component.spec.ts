import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovinoculturaComponent } from './bovinocultura.component';

describe('BovinoculturaComponent', () => {
  let component: BovinoculturaComponent;
  let fixture: ComponentFixture<BovinoculturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BovinoculturaComponent]
    });
    fixture = TestBed.createComponent(BovinoculturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
