import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPecuariosComponent } from './dados-pecuarios.component';

describe('DadosPecuariosComponent', () => {
  let component: DadosPecuariosComponent;
  let fixture: ComponentFixture<DadosPecuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosPecuariosComponent]
    });
    fixture = TestBed.createComponent(DadosPecuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
