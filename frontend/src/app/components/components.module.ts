import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BovinoculturaComponent } from './bovinocultura/bovinocultura.component';



@NgModule({
  declarations: [
		HeaderComponent,
		BovinoculturaComponent
	],
  imports: [
    CommonModule
  ],
	exports: [
		HeaderComponent,
		BovinoculturaComponent
	]
})
export class ComponentsModule { }
