import { Injectable } from '@angular/core';
import {IDocs} from "../interfaces/i-docs";
import {BaseService} from "./base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DokPersyaratanService {

  endpoint: string = "upload"


  constructor(
    private baseService: BaseService,
    private httpClient: HttpClient
  ) { }


}
