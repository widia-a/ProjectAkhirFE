import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IKontrak, IKontrakWrapper } from '../interfaces/i-kontrak';
import { BaseService } from './base.service';
import {IUserWrapper} from "../interfaces/i-user";
import {ILessee, ILesseeWrapper} from "../interfaces/i-lessee";

@Injectable({
  providedIn: 'root'
})
export class KontrakService {

  constructor(
    private baseService: BaseService,
    private httpClient: HttpClient
  ) { }

  getFilter(ck: string): Observable<IKontrakWrapper>{
    return this.httpClient.get<IKontrakWrapper>(
      `${this.baseService.baseURL}kontrak/byno?noKontrak=${ck}`
    )
  }

  endpoint: string = 'kontrak/datas/all'
  all(): Observable<IUserWrapper>{
    return this.httpClient.get<IUserWrapper>(
      `${this.baseService.baseURL}${this.endpoint}`
    )
  }

  allKontrak(): Observable<Array<IKontrak>>{
    return this.httpClient.get<Array<IKontrak>>(
      `${this.baseService.baseURL}${this.endpoint}`
    )
  }

  create(kontrak: IKontrak): Observable<IKontrakWrapper>{
    const headers = {
      "Content-Type": "application/json"
    };
    let body = JSON.stringify(kontrak);
    return this.httpClient.post<IKontrakWrapper>(
      `${this.baseService.baseURL}kontrak`,
      body,
      {headers}
    );
  }

  }

