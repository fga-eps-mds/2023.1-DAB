import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//componentes
import { HeaderComponent } from './components/header/header.component';
import { BovinoculturaComponent } from './components/bovinocultura/bovinocultura.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { SuinoculturaComponent } from './components/suinocultura/suinocultura.component';
import { AvinoculturaComponent } from './components/avinocultura/avinocultura.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BovinoculturaComponent,
    HomeComponent,
    SuinoculturaComponent,
    AvinoculturaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
