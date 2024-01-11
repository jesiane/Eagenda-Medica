import { Component, Input } from '@angular/core';
import { ListarConsultaViewModel } from '../models/listar-consulta.view-model';

@Component({
  selector: 'app-card-consulta',
  templateUrl: './card-consulta.component.html',
  styleUrls: ['./card-consulta.component.scss']
})
export class CardConsultaComponent {
  @Input({required: true}) consulta!: ListarConsultaViewModel;
}
