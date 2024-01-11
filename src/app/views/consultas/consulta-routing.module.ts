import { inject, NgModule } from "@angular/core";
import { ResolveFn, ActivatedRouteSnapshot, Routes, RouterModule } from "@angular/router";
import { ListarConsultaViewModel } from "./models/listar-consulta.view-model";
import { ConsultasService } from "./services/consulta.service";
import { FormsConsultaViewModel } from "./models/forms-consulta.view-model";
import { VisualizarConsultaViewModel } from "./models/visualizar-consulta.view-model";
import { EditarConsultaComponent } from "./editar-consulta/editar-consulta.component";
import { ExcluirConsultaComponent } from "./excluir-consulta/excluir-consulta.component";
import { InserirConsultaComponent } from "./inserir-consulta/inserir-consulta.component";
import { ListarConsultaComponent } from "./listar-consulta/listar-consulta.component";

const listarConsultasResolver: ResolveFn<
  ListarConsultaViewModel[]
> = () => {
  return inject(ConsultasService).selecionarTodos();
};

const formsConsultaResolver: ResolveFn<FormsConsultaViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(ConsultasService).selecionarPorId(route.paramMap.get('id')!);
};

const visualizarConsultaResolver: ResolveFn<
  VisualizarConsultaViewModel
> = (route: ActivatedRouteSnapshot) => {
  return inject(ConsultasService).selecionarConsultaCompletoPorId(
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
    component: ListarConsultaComponent,
    resolve: { consulta: listarConsultasResolver },
  },

  {
    path: 'inserir',
    component: InserirConsultaComponent,
  },
  {
    path: 'editar/:id',
    component: EditarConsultaComponent,
    resolve: { consulta: formsConsultaResolver },
  },
  {
    path: 'excluir/:id',
    component: ExcluirConsultaComponent,
    resolve: { consulta: visualizarConsultaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasRoutingModule {}
