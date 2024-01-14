import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { InserirConsultaComponent } from './inserir-consulta/inserir-consulta.component';
import { ExcluirConsultaComponent } from './excluir-consulta/excluir-consulta.component';
import { EditarConsultaComponent } from './editar-consulta/editar-consulta.component';
import { ListarConsultaComponent } from './listar-consulta/listar-consulta.component';
import { CardConsultaComponent } from './card-consulta/card-consulta.component';
import { ConsultasService } from "./services/consulta.service";
import { ConsultasRoutingModule } from "./consulta-routing.module";


@NgModule({
  declarations: [
    InserirConsultaComponent,
    ListarConsultaComponent,
    EditarConsultaComponent,
    ExcluirConsultaComponent,
    CardConsultaComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    ConsultasRoutingModule],
  providers: [
   ConsultasService
  ]
})
export class ConsultasModule { }