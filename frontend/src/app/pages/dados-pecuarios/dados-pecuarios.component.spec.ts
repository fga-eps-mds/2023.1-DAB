import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPecuariosComponent } from './dados-pecuarios.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BarChartComponent } from 'src/app/chart/bar-chart/bar-chart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('DadosPecuariosComponent', () => {
  let component: DadosPecuariosComponent;
  let fixture: ComponentFixture<DadosPecuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DadosPecuariosComponent,
        HeaderComponent,
        BarChartComponent
      ],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(DadosPecuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
