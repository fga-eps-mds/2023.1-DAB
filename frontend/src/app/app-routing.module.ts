import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './pages/home/home.component';
import { DadosPecuariosComponent } from './pages/dados-pecuarios/dados-pecuarios.component';

const routes: Routes = [
  { path: "", component:HomeComponent},
  { path: "r1", component:DadosPecuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
