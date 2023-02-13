import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersyaratanComponent} from "./components/persyaratan/persyaratan.component";
import {LoginComponent} from "./components/login/login.component";
import {ListPersyaratanComponent} from "./components/list-persyaratan/list-persyaratan.component";
import {KontrakComponent} from "./components/kontrak/kontrak.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'order', component: PersyaratanComponent},
  {path: 'list-order', component: ListPersyaratanComponent},
  {path: 'kontrak', component: KontrakComponent},
  // {path: 'list-order', component: ListPersyaratanComponent, canActivate: [AuthGuardService]},
  {path: '', redirectTo: 'login', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

