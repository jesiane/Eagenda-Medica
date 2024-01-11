import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsConsultaViewModel } from '../models/forms-consulta.view-model';
import { ListarMedicoViewModel } from '../../medicos/models/listar-medico.view-model';

@Component({
  selector: 'app-inserir-consulta',
  templateUrl: './inserir-consulta.component.html',
  styleUrls: ['./inserir-consulta.component.scss']
})
export class InserirConsultaComponent implements OnInit {
  form?: FormGroup;

  consultaFormVM?: FormsConsultaViewModel;
  medicos: ListarMedicoViewModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
   // private consultasService: ConsultasService,
   // private contatosService: ContatosService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      assunto: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      tipoLocal: new FormControl(0, [Validators.required]),
      link: new FormControl(''),
      local: new FormControl(''),
      data: new FormControl('09/10/2023', [Validators.required]),
      horaInicio: new FormControl('08:00', [Validators.required]),
      horaTermino: new FormControl('09:00', [Validators.required]),
      contatoId: new FormControl(''),
    });

   // this.contatosService
   //   .selecionarTodos()
   //   .subscribe(
   //     (contatosCadastrados) => (this.contatos = contatosCadastrados)
    //  );
  }

  gravar() {
  //  if (this.form?.invalid) {
   //   for (let erro of this.form.validate()) {
   //    this.toastrService.warning(erro);
   //   }

     // return;
    }

  //  this.compromissosService.inserir(this.form?.value).subscribe({
   //   next: (res) => this.processarSucesso(res),
   //   error: (err) => this.processarFalha(err),
 //   });
  }

  //processarSucesso(res: FormsCompromissoViewModel) {
 //   this.toastrService.success(
 //     `O compromisso "${res.assunto}" foi salvo com sucesso!`,
   //   'Sucesso'
 //   );

 //   this.router.navigate(['/compromissos', 'listar']);
 // }

 // processarFalha(erro: Error) {
 //   this.toastrService.error(erro.message, 'Erro');
// }
//}
