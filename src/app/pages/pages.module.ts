import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { ComponentsModule } from '../components/components.module';

//pages
import { HomeComponent } from '../pages/home/home.component';
import { DadosPecuariosComponent } from '../pages/dados-pecuarios/dados-pecuarios.component';

@NgModule({
  declarations: [
    HomeComponent,
		DadosPecuariosComponent
  ],
  imports: [
    CommonModule,
		ComponentsModule
  ]
})
export class HomeModule { }
