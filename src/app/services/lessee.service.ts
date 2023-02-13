import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILessee, ILesseeWrapper } from '../interfaces/i-lessee';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LesseeService {

  constructor(
    private baseService: BaseService,
    private httpClient: HttpClient
  ) { }

  endpointAll: string = "lessee/all"

  all(): Observable<ILesseeWrapper>{
    return this.httpClient.get<ILesseeWrapper>(
      `${this.baseService.baseURL}${this.endpointAll}`
    )
  }

  getFilter(npwp: string): Observable<ILesseeWrapper>{
    return this.httpClient.get<ILesseeWrapper>(
      `${this.baseService.baseURL}lessee/no?npwp=${npwp}`
    )
  }

  create(transaction: ILessee): Observable<ILesseeWrapper>{
    const headers = {
      "Content-Type": "application/json"
    };
    let body = JSON.stringify(transaction);
    return this.httpClient.post<ILesseeWrapper>(
      `${this.baseService.baseURL}lessee`,
      body,
      {headers}
);
}
}
