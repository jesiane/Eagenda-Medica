import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistroComponent } from "./registro.component";

const routes: Routes = [
  {
    path: 'registro',
    component: RegistroComponent,
   // canActivate: [loginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRoutingModule {}
