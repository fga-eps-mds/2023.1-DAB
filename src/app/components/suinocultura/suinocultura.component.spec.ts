import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuinoculturaComponent } from './suinocultura.component';

describe('SuinoculturaComponent', () => {
  let component: SuinoculturaComponent;
  let fixture: ComponentFixture<SuinoculturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuinoculturaComponent]
    });
    fixture = TestBed.createComponent(SuinoculturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
