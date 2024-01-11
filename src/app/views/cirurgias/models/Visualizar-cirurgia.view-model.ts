import { ListarMedicoViewModel } from "../../medicos/models/listar-medico.view-model";

export class VisualizarCirurgiaViewModel {
  id: string;
  assunto: string;
  local: string;
  data: Date;
  horaInicio: Date;
  horaTermino: Date;

  medico?: ListarMedicoViewModel;

  constructor(
    id: string,
    assunto: string,
    local: string,
    data: Date,
    horaInicio: Date,
    horaTermino: Date,
    medico: ListarMedicoViewModel,
  ) {
    this.id = id;
    this.assunto = assunto;
   
    this.local = local;
    this.data = data;
    this.horaInicio = horaInicio;
    this.horaTermino = horaTermino;
    this.medico = medico;
  }

}