import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './pages/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DadosPecuariosComponent } from './pages/dados-pecuarios/dados-pecuarios.component';
import { DadosSafrasComponent } from './pages/dados-safras/dados-safras.component';
import { InformationPageComponent } from './pages/information-page/information-page.component';

const routes: Routes = [
  { path: "pecuaria", component:HomeComponent},
<<<<<<< HEAD
  { path: "r1", component:DadosPecuariosComponent},
  { path: "safra", component:DadosSafrasComponent},
  { path: "", component:HomePageComponent},
  { path: "info", component:InformationPageComponent}
=======
  { path: "pecuaria/:dadosId", component:DadosPecuariosComponent},
  { path: "", component:HomePageComponent }
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
