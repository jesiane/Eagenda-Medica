import { ListarMedicoViewModel } from "../../medicos/models/listar-medico.view-model";
import { TipoLocalConsultaEnum } from "./tipo-local-consulta.enum";

export class VisualizarConsultaViewModel {

  id: string;
  local: string;
  assunto: string;
  tipoLocal: TipoLocalConsultaEnum;
  link: string;
  data: Date;
  horaInicio: Date;
  horaTermino: Date;
  medico: ListarMedicoViewModel;

  constructor(
    id: string,
    assunto: string,
    local: string,
    tipoLocal: TipoLocalConsultaEnum,
    link: string,
    data: Date,
    horaInicio: Date,
    horaTermino: Date,
    medico: ListarMedicoViewModel,
  ) {
    this.id = id;
    this.assunto = assunto;
    this.tipoLocal = tipoLocal;
    this.link = link;
    this.local = local;
    this.data = data;
    this.horaInicio = horaInicio;
    this.horaTermino = horaTermino;
    this.medico = medico;
  }
};
