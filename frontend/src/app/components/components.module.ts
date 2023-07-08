import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { MapComponent } from './map/map.component';

import { RouterLink } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
	declarations: [
		HeaderComponent,
		CarouselComponent,
		CardComponent,
        MapComponent,
  
  		LoaderComponent
	],
	imports: [
		CommonModule,
		RouterLink
	],
	exports: [
		HeaderComponent,
		CarouselComponent,
		CardComponent,
		
		MapComponent,
		LoaderComponent
	]
})
export class ComponentsModule { }
