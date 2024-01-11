import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, catchError, throwError } from "rxjs";
import { FormsConsultaViewModel } from "../models/forms-consulta.view-model";
import { ListarConsultaViewModel } from "../models/listar-consulta.view-model";
import { VisualizarConsultaViewModel } from "../models/visualizar-consulta.view-model";
import { LocalStorageService } from "src/app/core/auth/services/local-storage.service";

@Injectable ()
export class ConsultasService{
  private endpoint: string ='';

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {}

  public inserir(
    compromissso: FormsConsultaViewModel
  ): Observable<FormsConsultaViewModel> {
    return this.http
      .post<any>(this.endpoint, compromissso, this.obterHeadersAutorizacao())
      .pipe(
        map((res) => res.dados),
        catchError((err) => this.processarErroHttp(err))
      );
  }

  public editar(
    id: string,
    compromisso: FormsConsultaViewModel
  ): Observable<FormsConsultaViewModel> {
    return this.http
      .put<any>(this.endpoint + id, compromisso, this.obterHeadersAutorizacao())
      .pipe(
        map((res) => res.dados),
        catchError((err) => this.processarErroHttp(err))
      );
  }

  public excluir(id: string): Observable<any> {
    return this.http
      .delete(this.endpoint + id, this.obterHeadersAutorizacao())
      .pipe(catchError((err) => this.processarErroHttp(err)));
  }

  public selecionarTodos(): Observable<ListarConsultaViewModel[]> {
    return this.http
      .get<any>(this.endpoint, this.obterHeadersAutorizacao())
      .pipe(
        map((res) => res.dados),
        catchError((err) => this.processarErroHttp(err))
      );
  }

  public selecionarPorId(id: string): Observable<FormsConsultaViewModel> {
    return this.http
      .get<any>(this.endpoint + id, this.obterHeadersAutorizacao())
      .pipe(
        map((res) => res.dados),
        catchError((err) => this.processarErroHttp(err))
      );
  }

  public selecionarConsultaCompletoPorId(
    id: string
  ): Observable<VisualizarConsultaViewModel> {
    return this.http
      .get<any>(
        this.endpoint + 'visualizacao-completa/' + id,
        this.obterHeadersAutorizacao()
      )
      .pipe(
        map((res) => res.dados),
        catchError((err) => this.processarErroHttp(err))
      );
  }

  private obterHeadersAutorizacao() {
    const token = this.localStorage.obterDadosLocaisSalvos()?.chave;

    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`,
      }),
    };
  }

  private processarErroHttp(erro: HttpErrorResponse) {
    let mensagemErro = '';

    if (erro.status == 0)
      mensagemErro = 'Ocorreu um erro ao processar a requisição.';
    if (erro.status == 401)
      mensagemErro =
        'O usuário não está autorizado. Efetue login e tente novamente.';
    else mensagemErro = erro.error?.erros[0];

    return throwError(() => new Error(mensagemErro));
  }
}
