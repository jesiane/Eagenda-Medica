import { Component, OnInit } from '@angular/core';
import { ListarCirurgiaViewModel } from '../models/listar-cirurgia.view-model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Component({
  selector: 'app-listar-cirurgias',
  templateUrl: './listar-cirurgias.component.html',
  styleUrls: ['./listar-cirurgias.component.scss']
})
export class ListarCirurgiasComponent  implements OnInit{
  cirurgias: ListarCirurgiaViewModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.data.pipe(map((dados) => dados['cirurgia'])).subscribe({
      next: (cirurgias) => this.obterCirurgias(cirurgias),
      error: (erro) => this.processarFalha(erro),
    });
  }

  obterCirurgias(cirurgias: ListarCirurgiaViewModel[]) {
    this.cirurgias = cirurgias;
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Erro');
  }
}
