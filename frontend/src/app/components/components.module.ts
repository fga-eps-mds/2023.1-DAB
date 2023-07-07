import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
	declarations: [
		HeaderComponent,
		CarouselComponent,
		CardComponent,
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
		LoaderComponent
	]
})
export class ComponentsModule { }
