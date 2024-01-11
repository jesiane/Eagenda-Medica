import { TipoLocalConsultaEnum } from "./tipo-local-consulta.enum";

export class FormsConsultaViewModel {

  assunto: string;
  local: string;
  tipoLocal: TipoLocalConsultaEnum;
  link: string;
  data: Date;
  horaInicio: Date;
  horaTermino: Date;
  
  medicoId : string;

  constructor(
    assunto: string,
    local: string,
    tipoLocal: TipoLocalConsultaEnum,
    link: string,
    data: Date,
    horaInicio: Date,
    horaTermino: Date,
    medicoId: string,
  ) {
    this.assunto = assunto;
    this.tipoLocal = tipoLocal;
    this.link = link;
    this.local = local;
    this.data = data;
    this.horaInicio = horaInicio;
    this.horaTermino = horaTermino;
    this.medicoId = medicoId;
  }
 
}
