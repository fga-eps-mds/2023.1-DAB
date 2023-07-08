import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// modules
import { ComponentsModule } from '../components/components.module';

//pages
import { HomeComponent } from '../pages/home/home.component';
import { DadosPecuariosComponent } from '../pages/dados-pecuarios/dados-pecuarios.component';
import { ChartModule } from '../chart/chart.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeSafraComponent } from './home-safras/home-safra.component';
import { InformationPageComponent } from './information-page/information-page.component';
import { DadosSafrasComponent } from './dados-safras/dados-safras.component';


@NgModule({
  declarations: [
    HomeComponent,
		DadosPecuariosComponent,
    HomePageComponent,
    HomeSafraComponent,
    InformationPageComponent,
    DadosSafrasComponent
  ],
  imports: [
    CommonModule,
		ComponentsModule,
		ChartModule,
    RouterLink
  ]
})
export class HomeModule { }
