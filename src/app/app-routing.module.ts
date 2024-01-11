import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { InserirMedicoComponent } from './views/medicos/inserir-medico/inserir-medico.component';
import { ListarMedicoComponent } from './views/medicos/listar-medico/listar-medico.component';
import { EditarMedicoComponent } from './views/medicos/editar-medico/editar-medico.component';
import { ExcluirMedicoComponent } from './views/medicos/excluir-medico/excluir-medico.component';
import { InserirCirurgiaComponent } from './views/cirurgias/inserir-cirurgia/inserir-cirurgia.component';
import { ListarCirurgiasComponent } from './views/cirurgias/listar-cirurgias/listar-cirurgias.component';
import { EditarCirurgiaComponent } from './views/cirurgias/editar-cirurgia/editar-cirurgia.component';
import { ExcluirCirurgiaComponent } from './views/cirurgias/excluir-cirurgia/excluir-cirurgia.component';
import { InserirConsultaComponent } from './views/consultas/inserir-consulta/inserir-consulta.component';
import { EditarConsultaComponent } from './views/consultas/editar-consulta/editar-consulta.component';
import { ExcluirConsultaComponent } from './views/consultas/excluir-consulta/excluir-consulta.component';
import { ListarConsultaComponent } from './views/consultas/listar-consulta/listar-consulta.component';
import { authGuard } from './core/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo:'dashboard', //login
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
 {
    path: 'medicos/inserir',
    component: InserirMedicoComponent,
  },
  {
    path: 'medicos/listar',
    component: ListarMedicoComponent,
  },
  {
    path: 'medicos/editar',
    component: EditarMedicoComponent,
  },
  {
    path: 'medicos/excluir',
    component: ExcluirMedicoComponent,
  },
  /*{
    path: 'medicos',
    loadChildren: () =>
      import('./views/medicos/medicos.module').then(
        (m) => m.MedicosModule
      ),
    canActivate: [authGuard],
  },     */

 {
    path: 'cirurgias/inserir',
    component: InserirCirurgiaComponent,
  },
  {
    path: 'cirurgias/listar',
    component: ListarCirurgiasComponent,
  },
  {
    path: 'cirurgias/editar',
    component: EditarCirurgiaComponent,
  },
  {
    path: 'cirurgias/excluir',
    component: ExcluirCirurgiaComponent,
  },
 /*  {
    path: 'cirurgias',
    loadChildren: () =>
      import('./views/cirurgias/cirurgias.module').then(
        (m) => m.CirurgiasModule
      ),
    canActivate: [authGuard],
  },*/

  {
    path: 'consultas/inserir',
    component: InserirConsultaComponent,
  },
  {
    path: 'consultas/listar',
    component: ListarConsultaComponent,
  },
  {
    path: 'consultas/editar',
    component: EditarConsultaComponent,
  },
  {
    path: 'consultas/excluir',
    component: ExcluirConsultaComponent,
  },
  /*{
    path: 'consultas',
    loadChildren: () =>
      import('./views/consultas/consultas.module').then(
        (m) => m.ConsultasModule
      ),
    canActivate: [authGuard],
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
