import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BovinoculturaComponent } from './bovinocultura/bovinocultura.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
		HeaderComponent,
		BovinoculturaComponent,
		CarouselComponent
	],
  imports: [
    CommonModule
  ],
	exports: [
		HeaderComponent,
		BovinoculturaComponent,
		CarouselComponent
	]
})
export class ComponentsModule { }
