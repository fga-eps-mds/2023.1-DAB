import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ComponentsModule } from '../components/components.module';

//pages
import { HomeComponent } from '../pages/home/home.component';
import { DadosPecuariosComponent } from '../pages/dados-pecuarios/dados-pecuarios.component';
import { ChartModule } from '../chart/chart.module';
import { HomePageComponent } from './home-page/home-page.component';
import { InformationPageComponent } from './information-page/information-page.component';


@NgModule({
  declarations: [
    HomeComponent,
		DadosPecuariosComponent,
    HomePageComponent,
    InformationPageComponent
  ],
  imports: [
    CommonModule,
		ComponentsModule,
		ChartModule
  ]
})
export class HomeModule { }
