import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../principal/inicio/inicio.component';
import { CategoriasComponent } from '../principal/categorias/categorias.component';
import { NosotrosComponent } from '../principal/nosotros/nosotros.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule {}
