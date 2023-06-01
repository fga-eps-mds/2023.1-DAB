import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
		HeaderComponent,
		CardComponent,
  		FooterComponent
	],
  imports: [
    CommonModule
  ],
	exports: [
		HeaderComponent,
		CardComponent,
		FooterComponent
	]
})
export class ComponentsModule { }
