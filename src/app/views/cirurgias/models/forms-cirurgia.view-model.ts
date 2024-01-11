export class FormsCirurgiaViewModel {
  assunto: string;
  local: string;

  data: Date;
  horaInicio: Date;
  horaTermino: Date;

  medicoId?: string;

  constructor(
    assunto: string,
    local: string,
    data: Date,
    horaInicio: Date,
    horaTermino: Date,
    medicoId: string ,
  ){
    this.assunto = assunto;
    this.local = local;
    this.data = data;
    this.horaInicio = horaInicio;
    this.horaTermino = horaTermino;
    this.medicoId = medicoId;
  }
}