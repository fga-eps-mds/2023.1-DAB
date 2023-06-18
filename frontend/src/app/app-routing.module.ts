import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './pages/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DadosPecuariosComponent } from './pages/dados-pecuarios/dados-pecuarios.component';
import { DadosSafrasComponent } from './pages/dados-safras/dados-safras.component';

const routes: Routes = [
  { path: "pecuaria", component:HomeComponent},
  { path: "r1", component:DadosPecuariosComponent},
  {path: "safra", component:DadosSafrasComponent},
  {path: "", component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
