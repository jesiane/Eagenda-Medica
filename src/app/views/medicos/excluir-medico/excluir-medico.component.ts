import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisualizarMedicoViewModel } from '../models/Visualizar-medico.view-model';
import { MedicosService } from '../services/medico.service';

@Component({
  selector: 'app-excluir-medico',
  templateUrl: './excluir-medico.component.html',
  styleUrls: ['./excluir-medico.component.scss']
})
export class ExcluirMedicoComponent implements OnInit {
  medicoVM: VisualizarMedicoViewModel;
  idSelecionado: string | null = null;

  constructor(
    private medicoService: MedicosService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.medicoVM = new VisualizarMedicoViewModel('', '', '', '', '', '');
  }

  ngOnInit(): void {
    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if (!this.idSelecionado) return;

    this.medicoService
      .selecionarMedicoCompletoPorId(this.idSelecionado)
      .subscribe((res) => {
        this.medicoVM = res;
      });
  }

  gravar() {
    this.medicoService.excluir(this.idSelecionado!).subscribe((res) => {
      this.router.navigate(['/contatos', 'listar']);
    });
  }
}
