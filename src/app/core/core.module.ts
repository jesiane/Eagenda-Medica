import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthModule } from './auth/auth.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule,
    AuthModule,
  ],
  exports: [NavbarComponent, AuthModule,FooterComponent],
})
export class CoreModule {}
