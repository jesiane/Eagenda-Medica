import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormsCirurgiaViewModel } from "../models/forms-cirurgia.view-model";
import { Observable, catchError, map, throwError } from "rxjs";
import { ListarCirurgiaViewModel } from "../models/listar-cirurgia.view-model";
import { VisualizarCirurgiaViewModel } from "../models/Visualizar-cirurgia.view-model";
import { LocalStorageService } from "src/app/core/auth/services/local-storage.service";

@Injectable()
export class CirurgiaService {
  private endpoint: string ='';

  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient
  ) {}

  public inserir(Cirurgia: FormsCirurgiaViewModel): Observable<FormsCirurgiaViewModel> {
    return this.http.post<any>(
      this.endpoint, Cirurgia)
      .pipe(map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err)));
  }

  public editar(id: string, cirurgia: FormsCirurgiaViewModel) {
    return this.http
      .put<any>(this.endpoint + id, cirurgia)
      .pipe(map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err)));
  }

  public excluir(id: string): Observable<any> {
    return this.http.delete(this.endpoint + id)
    .pipe(catchError((err: HttpErrorResponse) => this.processarErroHttp(err)))
  }

  public selecionarTodos(): Observable<ListarCirurgiaViewModel[]> {
    return this.http
      .get<any>(this.endpoint)
      .pipe(map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err)));
  }

 
  public selecionarPorId(id: string): Observable<FormsCirurgiaViewModel> {
    return this.http
      .get<any>(this.endpoint + id)
      .pipe(map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err)));
  }

  public selecionarCirurgiaCompletoPorId(
    id: string
  ): Observable<VisualizarCirurgiaViewModel> {
    return this.http
      .get<any>(
        this.endpoint + 'visualizacao-completa/' + id
      )
      .pipe(map((res) => res.dados),
      catchError((err: HttpErrorResponse) => this.processarErroHttp(err)));
  }

  private processarErroHttp(erro: HttpErrorResponse) {
    let mensagemErro: string = '';

    switch(erro.status) {
      case 0:
        mensagemErro = 'Erro ao processar a requisição.';
        break;
      case 401:
        mensagemErro = 'Usuário não autorizado, necessário efetuar login.';
        break;
      default:
        mensagemErro = erro.error?.erros[0];
    }

    return throwError(() => new Error(mensagemErro));
  }
 }

