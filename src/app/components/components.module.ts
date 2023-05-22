import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BovinoculturaComponent } from './bovinocultura/bovinocultura.component';
import { FooterComponent } from './footer/footer.component';
import { SuinoculturaComponent } from './suinocultura/suinocultura.component';
import { AvinoculturaComponent } from './avinocultura/avinocultura.component';



@NgModule({
  declarations: [
	HeaderComponent,
	BovinoculturaComponent,
  	FooterComponent,
  	SuinoculturaComponent,
    AvinoculturaComponent
	],
  imports: [
    CommonModule
  ],
	exports: [
		HeaderComponent,
		BovinoculturaComponent,
		FooterComponent,
		SuinoculturaComponent,
		AvinoculturaComponent
	]
})
export class ComponentsModule { }
