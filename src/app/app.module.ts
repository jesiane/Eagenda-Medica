import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { MedicosModule } from './views/medicos/medicos.module';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoginModule } from './views/login/login.module';
import { RegistroModule } from './views/registro/registro.module';
import { CirurgiasModule } from './views/cirurgias/cirurgias.module';
import { ConsultasModule } from './views/consultas/consultas.module';
import { httpTokenInterceptor } from './core/auth/interceptors/http-token.interceptor';
import { AuthService } from './core/auth/services/auth.service';

function logarUsuarioSalvoFactory(authService: AuthService) {
  return () => authService.logarUsuarioSalvo();
}


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-botton-center',
      preventDuplicates: true,
    }),
    HttpClientModule,    

    LoginModule,
    RegistroModule,
    CoreModule,
    DashboardModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: logarUsuarioSalvoFactory,
      deps: [AuthService],
      multi: true,
    },
    provideHttpClient(withInterceptors([httpTokenInterceptor])),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
