import { Component, Input } from '@angular/core';
import { ListarCirurgiaViewModel } from '../models/listar-cirurgia.view-model';

@Component({
  selector: 'app-card-cirurgia',
  templateUrl: './card-cirurgia.component.html',
  styleUrls: ['./card-cirurgia.component.scss']
})
export class CardCirurgiaComponent {
  @Input({required: true}) cirurgia: ListarCirurgiaViewModel;

  constructor(){
    this.cirurgia = new ListarCirurgiaViewModel('','',new Date,new Date,new Date,'');
  }
}
