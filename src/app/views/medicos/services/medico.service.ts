import { Observable, map } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { FormsMedicoViewModel } from "../models/forms-medico.view-model";
import { ListarMedicoViewModel } from "../models/listar-medico.view-model";
import { VisualizarMedicoViewModel } from "../models/Visualizar-medico.view-model";

@Injectable ()
export class MedicosService{
  private endpoint: string = ''; //aula 151 video 4

  constructor(private http: HttpClient    ){}

  public inserir(medico: FormsMedicoViewModel): Observable<FormsMedicoViewModel>{
    return this.http.post<any>(this.endpoint, medico, this.obterHeadersAutorizacao());
  }

  public editar(id: string, medico: FormsMedicoViewModel) {
    return this.http
      .put<any>(this.endpoint + id, medico, this.obterHeadersAutorizacao())
      .pipe(map((res) => res.dados));
  }

  public excluir(id: string): Observable<any> {
    return this.http.delete(this.endpoint + id, this.obterHeadersAutorizacao());
  }

  public selecionarTodos(): Observable<ListarMedicoViewModel[]>{
    return this.http.get<any>(this.endpoint, this.obterHeadersAutorizacao())
    .pipe(map((res) => res.dados))
  }

  public selecionarPorId(id: string): Observable<FormsMedicoViewModel> {
    return this.http
      .get<any>(this.endpoint + id, this.obterHeadersAutorizacao())
      .pipe(map((res) => res.dados));
  }

  public selecionarMedicoCompletoPorId(
    id: string
  ): Observable<VisualizarMedicoViewModel> {
    return this.http
      .get<any>(
        this.endpoint + 'visualizacao-completa/' + id,
        this.obterHeadersAutorizacao()
      )
      .pipe(map((res) => res.dados));
  }

  private obterHeadersAutorizacao(){
    const token = environment.apiKey;

    return{
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        Authorization: 'Bearer ${token}' ,
      }),
    };
  }
}