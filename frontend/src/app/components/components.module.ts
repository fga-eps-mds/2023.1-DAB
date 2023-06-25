import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';


@NgModule({
	declarations: [
		HeaderComponent,
		CarouselComponent,
		CardComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		RouterLink
	],
	exports: [
		HeaderComponent,
		CarouselComponent,
		CardComponent,
		FooterComponent
	]
})
export class ComponentsModule { }
