import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsCirurgiaViewModel } from '../models/forms-cirurgia.view-model';
import { ListarMedicoViewModel } from '../../medicos/models/listar-medico.view-model';

@Component({
  selector: 'app-editar-cirurgia',
  templateUrl: './editar-cirurgia.component.html',
  styleUrls: ['./editar-cirurgia.component.scss']
})
export class EditarCirurgiaComponent {
  form?: FormGroup;

  cirurgiaFormVM?: FormsCirurgiaViewModel;
  medicos: ListarMedicoViewModel []=[];


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
