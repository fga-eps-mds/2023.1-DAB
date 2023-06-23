import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPecuariosComponent } from './dados-pecuarios.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { BarChartComponent } from 'src/app/chart/bar-chart/bar-chart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IbgeApiService } from 'src/app/service/ibge-api.service';


describe('DadosPecuariosComponent', () => {
  let component: DadosPecuariosComponent;
  let fixture: ComponentFixture<DadosPecuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DadosPecuariosComponent,
        HeaderComponent,
        FooterComponent,
        BarChartComponent
      ],
      imports: [HttpClientTestingModule], 
      providers: [IbgeApiService] 
    });
    fixture = TestBed.createComponent(DadosPecuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
