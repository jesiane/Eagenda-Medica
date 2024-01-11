import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MedicosService } from '../services/medico.service';
import { Router } from '@angular/router';
import { FormsMedicoViewModel } from '../models/forms-medico.view-model';

@Component({
  selector: 'app-inserir-medico',
  templateUrl: './inserir-medico.component.html',
  styleUrls: ['./inserir-medico.component.scss']
})
export class InserirMedicoComponent implements OnInit{
  form!: FormGroup;
  medicoVM!: FormsMedicoViewModel;

  constructor(private formBuilder: FormBuilder, private medicoService: MedicosService, private router: Router ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: new FormControl(''),
      crm: new FormControl(''),
      especialidade: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl(''),
    });
  }
  
  gravar() {
    this.medicoVM = this.form.value;

    this.medicoService.inserir(this.medicoVM).subscribe((res) => {
      console.log(res);

      this.router.navigate(['/dashboard']);
    });
  }
}
