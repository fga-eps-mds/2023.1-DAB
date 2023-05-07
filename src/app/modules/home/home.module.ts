import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//componentes
import { HeaderComponent } from './components/header/header.component';
import { BovinoculturaComponent } from './components/bovinocultura/bovinocultura.component';

//pages
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BovinoculturaComponent,
    HomeComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
