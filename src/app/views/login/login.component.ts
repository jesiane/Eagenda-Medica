import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form?: FormGroup;

  constructor(
    //private formBuilder: FormBuilder,
    //private authService: AuthService,
    //private toastrService: ToastrService,
    //private router: Router
  ) {}

  ngOnInit(): void {
    //this.form = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.email]],
      //senha: ['', [Validators.required, Validators.minLength(6)]],
    //});
  }

  campoEstaInvalido(nome: string) {
    return this.form!.get(nome)!.touched && this.form!.get(nome)!.invalid;
  }

  login() {
    //if (this.form?.invalid) {
      //const erros = this.form.validate();

    //  for (let erro of erros) this.toastrService.warning(erro);

      return;
    }

    //this.authService.login(this.form?.value).subscribe({
     // next: (res) => this.processarSucesso(res),
      //error: (err) => this.processarFalha(err),
  //  });
  }

  //processarSucesso(res: TokenViewModel) {
    //this.toastrService.success(
      //'Seja bem-vindo, ' + res.usuarioToken.nome + '!',
      //'Sucesso'
    //);

    //this.router.navigate(['/dashboard']);
  //}

  //processarFalha(err: Error) {
    //this.toastrService.error(err.message, 'Erro');
  //}
//}