import { Injectable } from '@angular/core';
import {ILogin} from "../interfaces/i-login";
import {ILoginWrapper} from "../interfaces/i-user";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "./base.service";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  endpoint: string = "accounts/login"


  constructor(private baseService: BaseService,
              private httpClient: HttpClient,
              private storageService: StorageService) { }

  login(loginUser: ILogin): Observable<ILoginWrapper>{
    let body = JSON.stringify(loginUser);
    const headers = {
      'Content-Type': 'application/json'
    }
    return this.httpClient.post<ILoginWrapper>(
      `${this.baseService.baseURL}${this.endpoint}`,
      body, {headers}
    )
  }

  isUserLoggedIn(): boolean{
    if (this.storageService.check('nip')){
      return true;
    }
    return false;
  }

  logOut(): void{
    this.storageService.clear('nip');
    this.storageService.clear('name')
  }
}
