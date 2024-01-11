export class ListarCirurgiaViewModel {
  id: string;
  assunto: string;
  data: Date;
  horaInicio: Date;
  horaTermino: Date;
  nomeMedico: string;

  constructor(
    id: string,
    assunto: string,
    data: Date,
    horaInicio: Date,
    horaTermino: Date,
    nomeMedico: string,
  ) {
    this.id = id;
    this.assunto = assunto;
    this.data = data;
    this.horaInicio = horaInicio;
    this.horaTermino = horaTermino;
    this.nomeMedico = nomeMedico;
  }
}