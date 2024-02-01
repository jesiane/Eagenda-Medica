import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormsMedicoViewModel } from '../models/forms-medico.view-model';
import { MedicosService } from '../services/medico.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.scss']
})
export class EditarMedicoComponent {
  form!:FormGroup;
  medicoVM!: FormsMedicoViewModel;
  idSelecionado: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
   // private medicoService: MedicosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: new FormControl(''),
      crm: new FormControl(''),
      especialidade: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl(''),
    });

    this.idSelecionado = this.route.snapshot.paramMap.get('id');

    if (!this.idSelecionado) return;

    //this.medicoService.selecionarPorId(this.idSelecionado).subscribe((res) => {
     // this.form.patchValue(res);
   // });
  }

  gravar() {
   // this.medicoVM = this.form.value;

   // this.medicoService
    //  .editar(this.idSelecionado!, this.medicoVM)
    //  .subscribe((res) => {
    //    console.log(res);

   //     this.router.navigate(['/medico/listar']);
  //    });
  }
}

  