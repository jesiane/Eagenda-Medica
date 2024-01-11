import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirMedicoComponent } from './inserir-medico/inserir-medico.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarMedicoComponent } from './listar-medico/listar-medico.component';
import { MedicosService } from './services/medico.service';
import { RouterModule } from '@angular/router';
import { EditarMedicoComponent } from './editar-medico/editar-medico.component';
import { ExcluirMedicoComponent } from './excluir-medico/excluir-medico.component';
import { CardMedicoComponent } from './card-medico/card-medico.component';
import { MedicosRoutingModule } from './medicos-routing.module';



@NgModule({
  declarations: [
    InserirMedicoComponent,
    ListarMedicoComponent,
    EditarMedicoComponent,
    ExcluirMedicoComponent,
    CardMedicoComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MedicosRoutingModule
  ],
  providers: [
    MedicosService
  ]
})
export class MedicosModule { }
