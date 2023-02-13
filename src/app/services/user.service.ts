import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginWrapper, IUser, IUserWrapper } from '../interfaces/i-user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = "accounts/datas/all"

  constructor(
    private baseService: BaseService,
    private httpClient: HttpClient
  ) { }

  all(): Observable<IUserWrapper>{
    return this.httpClient.get<IUserWrapper>(
        `${this.baseService.baseURL}${this.endpoint}`
    )
  }
}
