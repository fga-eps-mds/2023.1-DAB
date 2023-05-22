import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ComponentsModule } from '../components/components.module';

//pages
import { HomeComponent } from '../pages/home/home.component';
import { DadosPecuariosComponent } from '../pages/dados-pecuarios/dados-pecuarios.component';
import { ChartModule } from '../chart/chart.module';
import { SobreComponent } from './sobre/sobre.component';
import { RecursosComponent } from './recursos/recursos.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    HomeComponent,
		DadosPecuariosComponent,
    SobreComponent,
    RecursosComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
		ComponentsModule,
		ChartModule
  ]
})
export class HomeModule { }
