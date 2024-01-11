import { Component, Input } from '@angular/core';
import { ListarMedicoViewModel } from '../models/listar-medico.view-model';

@Component({
  selector: 'app-card-medico',
  templateUrl: './card-medico.component.html',
  styleUrls: ['./card-medico.component.scss']
})
export class CardMedicoComponent {
  @Input({ required: true }) medico!: ListarMedicoViewModel;

  constructor(){
    this.medico = new ListarMedicoViewModel(
      '',
      '',
      '',
      '',
      '',
      '',
    )
  }
}
