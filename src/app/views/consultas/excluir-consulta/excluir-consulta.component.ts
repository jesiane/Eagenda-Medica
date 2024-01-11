import { Component, OnInit } from '@angular/core';
import { VisualizarConsultaViewModel } from '../models/visualizar-consulta.view-model';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-excluir-consulta',
  templateUrl: './excluir-consulta.component.html',
  styleUrls: ['./excluir-consulta.component.scss']
})
export class ExcluirConsultaComponent implements OnInit {
  consultaVM?: VisualizarConsultaViewModel;

  constructor(
   // private consultasService: ConsultasService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.pipe(map((dados) => dados['compromisso'])).subscribe({
      next: (compromisso) => this.obterCompromisso(compromisso),
      error: (erro) => this.processarFalha(erro),
    });
  }

  gravar() {
 //   this.consultasService.excluir(this.compromissoVM!.id).subscribe({
 //     next: () => this.processarSucesso(),
 //     error: (err) => this.processarFalha(err),
///    });
  }

  obterCompromisso(consulta: VisualizarConsultaViewModel) {
    this.consultaVM = consulta;
  }

  processarSucesso() {
    this.toastrService.success(
      `O consulta foi excluído com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/consulta', 'listar']);
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Erro');
  }
}
