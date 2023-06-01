import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BovinoculturaComponent } from './bovinocultura/bovinocultura.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
		HeaderComponent,
		BovinoculturaComponent,
		CarouselComponent,
  		FooterComponent
	],
  imports: [
    CommonModule
  ],
	exports: [
		HeaderComponent,
		BovinoculturaComponent,
		CarouselComponent,
		FooterComponent
	]
})
export class ComponentsModule { }
