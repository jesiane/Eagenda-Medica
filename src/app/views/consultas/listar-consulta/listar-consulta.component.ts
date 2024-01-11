import { Component, OnInit } from '@angular/core';
import { ListarConsultaViewModel } from '../models/listar-consulta.view-model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Component({
  selector: 'app-listar-consulta',
  templateUrl: './listar-consulta.component.html',
  styleUrls: ['./listar-consulta.component.scss']
})
export class ListarConsultaComponent implements OnInit {
  consultas:ListarConsultaViewModel[] = []

  constructor(
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ){}
  ngOnInit(): void {
    this.route.data.pipe(map((dados) => dados['consultas'])).subscribe({
      next: (consultas) => this.obterConsultas(consultas),
      error: (erro) => this.processarFalha(erro),
    });
  }

  obterConsultas(consultas: ListarConsultaViewModel[]) {
    this.consultas = consultas;
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Erro');
  }
}
