import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosSafrasComponent } from './dados-safras.component';

describe('DadosSafrasComponent', () => {
  let component: DadosSafrasComponent;
  let fixture: ComponentFixture<DadosSafrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosSafrasComponent]
    });
    fixture = TestBed.createComponent(DadosSafrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
