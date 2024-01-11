import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCirurgiaComponent } from './card-cirurgia/card-cirurgia.component';
import { EditarCirurgiaComponent } from './editar-cirurgia/editar-cirurgia.component';
import { ExcluirCirurgiaComponent } from './excluir-cirurgia/excluir-cirurgia.component';
import { ListarCirurgiasComponent } from './listar-cirurgias/listar-cirurgias.component';
import { InserirCirurgiaComponent } from './inserir-cirurgia/inserir-cirurgia.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CirurgiaService as CirurgiasService } from './services/cirurgia.service';
import { CirurgiasRoutingModule } from './cirurgias-routing.module';



@NgModule({
  declarations: [ 
    InserirCirurgiaComponent,
    ListarCirurgiasComponent,
    EditarCirurgiaComponent,
    ExcluirCirurgiaComponent,
    CardCirurgiaComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    CirurgiasRoutingModule
  ],
  providers:[
    CirurgiasService
  ]
})
export class CirurgiasModule { }
