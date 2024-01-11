export class FormsMedicoViewModel {
  nome: string;
  crm: string;
  especialidade: string;
  email: string;
  telefone: string;

  constructor(
    nome: string,
    crm: string,
    especialidade: string,
    email: string,
    telefone: string,
  ){
    this.nome = nome;
    this.crm = crm;
    this.especialidade = especialidade;
    this.email = email;
    this.telefone = telefone;
  }
}