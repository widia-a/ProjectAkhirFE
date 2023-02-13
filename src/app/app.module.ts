import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { PersyaratanComponent } from './components/persyaratan/persyaratan.component';
import { ListPersyaratanComponent } from './components/list-persyaratan/list-persyaratan.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KontrakComponent } from './components/kontrak/kontrak.component';
import { DokumenComponent } from './components/dokumen/dokumen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersyaratanComponent,
    ListPersyaratanComponent,
    DashboardComponent,
    KontrakComponent,
    DokumenComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        DataTablesModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
