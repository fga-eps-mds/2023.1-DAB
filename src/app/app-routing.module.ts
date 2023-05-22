import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './pages/home/home.component';
import { DadosPecuariosComponent } from './pages/dados-pecuarios/dados-pecuarios.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "recursos", component: RecursosComponent},
  { path: "sobre", component: SobreComponent},
  { path: "contato", component: ContatoComponent},
  { path: "dadosBovinos", component: DadosPecuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
