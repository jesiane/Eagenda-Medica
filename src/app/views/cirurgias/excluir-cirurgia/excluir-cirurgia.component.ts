import { Component } from '@angular/core';
import { VisualizarCirurgiaViewModel } from '../models/Visualizar-cirurgia.view-model';

@Component({
  selector: 'app-excluir-cirurgia',
  templateUrl: './excluir-cirurgia.component.html',
  styleUrls: ['./excluir-cirurgia.component.scss']
})
export class ExcluirCirurgiaComponent {
  cirurgiaVM?: VisualizarCirurgiaViewModel;

  gravar() {
    //   this.consultasService.excluir(this.compromissoVM!.id).subscribe({
    //     next: () => this.processarSucesso(),
    //     error: (err) => this.processarFalha(err),
   ///    });
     }
}
