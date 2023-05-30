import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BovinoculturaComponent } from './bovinocultura/bovinocultura.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
		HeaderComponent,
		BovinoculturaComponent,
  		FooterComponent
	],
  imports: [
    CommonModule
  ],
	exports: [
		HeaderComponent,
		BovinoculturaComponent,
		FooterComponent
	]
})
export class ComponentsModule { }
