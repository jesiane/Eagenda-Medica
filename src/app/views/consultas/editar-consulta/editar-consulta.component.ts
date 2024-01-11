import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ListarMedicoViewModel } from '../../medicos/models/listar-medico.view-model';
import { FormsConsultaViewModel } from '../models/forms-consulta.view-model';

@Component({
  selector: 'app-editar-consulta',
  templateUrl: './editar-consulta.component.html',
  styleUrls: ['./editar-consulta.component.scss']
})
export class EditarConsultaComponent  {
  form?: FormGroup;

  consultaFormVM?: FormsConsultaViewModel;
  medicos: ListarMedicoViewModel[] = [];

  

  gravar() {
   // if (this.form?.invalid) {
     // for (let erro of this.form.validate()) {
       // this.toastrService.warning(erro);
      //}

      return;
    }

   // const id = this.route.snapshot.paramMap.get('id')!;

    //this.consultaService.editar(id, this.form?.value).subscribe((res) => {
      //this.toastrService.success(
        //`O compromisso "${res.assunto}" foi salvo com sucesso!`,
        //'Sucesso'
      //);

      //this.router.navigate(['/compromissos', 'listar']);
    //});
  //}
}
