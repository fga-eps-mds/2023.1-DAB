import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './pages/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DadosPecuariosComponent } from './pages/dados-pecuarios/dados-pecuarios.component';
import { HomeSafraComponent } from './pages/home-safras/home-safra.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';
import { DadosSafrasComponent } from './pages/dados-safras/dados-safras.component';

const routes: Routes = [
  { path: "pecuaria", component:HomeComponent},
  { path: "safra", component:HomeSafraComponent},
  { path: "safra/:EstadoID", component:DadosSafrasComponent},
  { path: "info", component:InformationPageComponent},
  { path: "pecuaria/:dadosId", component:DadosPecuariosComponent},
  { path: "", component:HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
