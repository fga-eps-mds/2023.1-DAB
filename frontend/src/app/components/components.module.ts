import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';



@NgModule({
	declarations: [
		HeaderComponent,
		CarouselComponent,
		CardComponent,
		FooterComponent,
        MapComponent,
  
	],
	imports: [
		CommonModule
	],
	exports: [
		HeaderComponent,
		CarouselComponent,
		CardComponent,
		FooterComponent,
		MapComponent
	]
})
export class ComponentsModule { }
