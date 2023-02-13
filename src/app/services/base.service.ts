import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  baseURL: string = "http://localhost:4200/api/v1/"
  // baseURL: string = "http://localhost:63105/api/v1/"

  constructor() { }
}
