import { NgModule, inject } from '@angular/core';
import { ListarMedicoComponent } from './listar-medico/listar-medico.component';
import { InserirMedicoComponent } from './inserir-medico/inserir-medico.component';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { ExcluirMedicoComponent } from './excluir-medico/excluir-medico.component';
import { MedicosService } from './services/medico.service';
import { ResolveFn, ActivatedRouteSnapshot, Routes, RouterModule } from '@angular/router';
import { VisualizarMedicoViewModel } from './models/Visualizar-medico.view-model';
import { FormsMedicoViewModel } from './models/forms-medico.view-model';
import { ListarMedicoViewModel } from './models/listar-medico.view-model';

const ListarMedicosResolver: ResolveFn<ListarMedicoViewModel[]> = () => {
  return inject(MedicosService).selecionarTodos();
};

const formsMedicoResolver: ResolveFn<FormsMedicoViewModel> = (
  route: ActivatedRouteSnapshot 
) => {
  return inject(MedicosService).selecionarPorId(route.paramMap.get('id')!);
};

const visualizarMedicoResolver: ResolveFn<VisualizarMedicoViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(MedicosService).selecionarMedicoCompletoPorId(
    route.paramMap.get('id')!
  );
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },

  {
    path: 'listar',
    component: ListarMedicoComponent,
    resolve: { medicos: ListarMedicosResolver },
  },
  {
    path: 'inserir',
    component: InserirMedicoComponent,
  },
  {
    path: 'editar/:id',
    component: EditarMedicoComponent,
    resolve: { medicos: formsMedicoResolver },
  },
  {
    path: 'excluir/:id',
    component: ExcluirMedicoComponent,
    resolve: { medico: visualizarMedicoResolver },
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicosRoutingModule { }
