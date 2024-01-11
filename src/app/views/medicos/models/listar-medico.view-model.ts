export class ListarMedicoViewModel{
  id:string;
  nome: string;
  crm: string;
  especialidade: string;
  email: string;
  telefone: string;

  constructor(
    id:string,
    nome: string,
    crm: string,
    especialidade: string,
    email: string,
    telefone: string,
  ){
    this.id = id;
    this.nome = nome;
    this.crm = crm;
    this.especialidade = especialidade;
    this.email = email;
    this.telefone = telefone;
  }
}