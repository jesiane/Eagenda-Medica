import { CommonModule } from "@angular/common";
import { NgModule, inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, Routes } from "@angular/router";

import { ListarCirurgiasComponent } from "./listar-cirurgias/listar-cirurgias.component";
import { InserirCirurgiaComponent } from "./inserir-cirurgia/inserir-cirurgia.component";
import { EditarCirurgiaComponent } from "./editar-cirurgia/editar-cirurgia.component";
import { ExcluirCirurgiaComponent } from "./excluir-cirurgia/excluir-cirurgia.component";
import { ListarCirurgiaViewModel } from "./models/listar-cirurgia.view-model";
import { FormsCirurgiaViewModel } from "./models/forms-cirurgia.view-model";
import { VisualizarCirurgiaViewModel } from "./models/Visualizar-cirurgia.view-model";
import { CirurgiaService } from "./services/cirurgia.service";

const listarCirurgiasResolver: ResolveFn<
  ListarCirurgiaViewModel[]
> = () => {
  return inject(CirurgiaService).selecionarTodos();
};

const formsCirurgiaResolver: ResolveFn<FormsCirurgiaViewModel> = (
  route: ActivatedRouteSnapshot
) => {
  return inject(CirurgiaService).selecionarPorId(route.paramMap.get('id')!);
};

const visualizarCirurgiaResolver: ResolveFn<
  VisualizarCirurgiaViewModel
> = (route: ActivatedRouteSnapshot) => {
  return inject(CirurgiaService).selecionarCirurgiaCompletoPorId(
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
    component: ListarCirurgiasComponent,
    resolve: { consulta: listarCirurgiasResolver },
  },

  {
    path: 'inserir',
    component: InserirCirurgiaComponent,
  },
  {
    path: 'editar/:id',
    component: EditarCirurgiaComponent,
    resolve: { consulta: formsCirurgiaResolver },
  },
  {
    path: 'excluir/:id',
    component: ExcluirCirurgiaComponent,
    resolve: { cirurgia: visualizarCirurgiaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CirurgiasRoutingModule {}
