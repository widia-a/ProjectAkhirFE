import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {isEmpty, Observable} from "rxjs";
import { BaseService } from './base.service';
import { FormsModule } from '@angular/forms';
import { compileNgModule } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private baseService: BaseService,
    private httpClient: HttpClient
    ) { }

  upload(files): Observable<any> {
    const formData: FormData = new FormData();

    //multiple-file
    for (var i = 0; i < files.length; i++) { 
      formData.append('files', files[i]);
      console.log('length', files.length);
      
  }

    // //single-file
    // formData.append('files', files);
    // console.log('files uploadservice: ', files);
    
      const request = new HttpRequest('POST', `${this.baseService.baseURL}filesup`, formData, {
        reportProgress: true,
        responseType: 'json'
      });
      console.log("request header", request.headers)
      return this.httpClient.request(request);
  }

  getFiles(): Observable<any> {
    return this.httpClient.get(`${this.baseService.baseURL}/files`);
  }
}
