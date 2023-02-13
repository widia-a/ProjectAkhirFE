import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { UploadService } from 'src/app/services/upload.service';
import { IFiles } from 'src/app/interfaces/i-files';
import { catchError, Observable, throwError } from 'rxjs';
import { IKontrak, IKontrakWrapper } from 'src/app/interfaces/i-kontrak';
import { LesseeService } from 'src/app/services/lessee.service';
import { ILessee, ILesseeWrapper } from 'src/app/interfaces/i-lessee';
import { IUser } from 'src/app/interfaces/i-user';
// import { File } from '@ionic-native/file'

@Component({
  selector: 'app-persyaratan',
  templateUrl: './persyaratan.component.html',
  styleUrls: ['./persyaratan.component.css']
})
export class PersyaratanComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private uploadService: UploadService,
    private lesseeService: LesseeService
  ) { }


  ngOnInit(): void {
    this.onAllLessee()
  }

  npwp=''
  datanull: boolean = false
  tampung: any;
  arr: any;
  nopo: any;
  lessees: Array<ILessee> = []


  @Input() konsumen:ILessee = {} as ILessee;

  @ViewChild('fileUploader') fileUploader:ElementRef;

  resetFileUploader() {
    this.fileUploader.nativeElement.value = null;
  }

  shortLink: string = "";
    file: File = null;

//  //single file
//   onChange(event) {
//       this.file = event.target.files[0];
// }

// onUpload() {
//   // console.log('this.file: ',this.file);
//   if(this.file == null){
//     alert("pilih file untuk upload")
//   }
//   else{
//     this.uploadService.upload(this.file).subscribe(
//       (event: any) => {
//           if (typeof (event) === 'object') {
//               this.shortLink = event.link;
//           }
//       }
//   );
//   this.resetFileUploader() //reset inputan
//   }
// }


//multiple file
  selectedFiles: FileList;
  myFiles:string[] = [];

    onChange(event:any) {
      if(event.target.files.length == 0)
      {
        alert("pilih file")
      }
      else{
        for (var i = 0; i < event.target.files.length; i++) {
          this.myFiles.push(event.target.files[i]);
      }
      console.log('changemyfiles: ', this.myFiles);
      }
  }

  onUpload(){
    this.onUploadFile()
    // this.onUploadLessee()
  }

  onUploadLessee(){
    console.log("konsumen", this.konsumen)
    this.lesseeService.create(this.konsumen)
      .pipe(catchError(this.handleError))
      .subscribe((response: ILesseeWrapper) => {
          console.log(response);
          alert('Data Berhasil Ditambahkan');
        },
        (error: any) => {
          this.messageError = error.message;
        })
  }

  onUploadFile(){
    if(this.myFiles == null || this.myFiles.length == 0){
      "pilih file untuk upload"
    }
    else{
      this.uploadService.upload(this.myFiles)
      .subscribe((event: any) => {
        if (typeof (event) === 'object') {
          this.shortLink = event.link;
        }
      }
    )
        console.log('upload berhasil');
    this.resetFileUploader() //reset inputan
    }
  }

  onAllLessee(): void{
    this.lesseeService.all().subscribe(
      (response: ILesseeWrapper) =>{
        let tempData = response.data;
        this.lessees = tempData
        console.log('tempData' ,tempData);
      }
    )
  }

  onCari(nk: string){
    console.log("nk:", nk);
    if(nk == '' || nk == null){
      alert("isi nomor kontrak")
    }
    else{
      this.lesseeService.getFilter(nk).subscribe(
        (response: ILesseeWrapper) => {
          if(response.data.length > 0){
            this.datanull = false
          }
          else
          {
            this.datanull = true
            console.log('response',Response.arguments);
            alert("data ditemukan")
            let tempData = response.data
            this.lessees = tempData
            var arr = Object.keys(this.lessees).map(key => ({type: key, value: this.lessees [key]}))
            // var arr = Object.entries(this.lessees).map(([type, value]) => ({type, value}))
            console.log("arr", arr);

          }
        },
        ((error: any) => {
          console.log(error);
          alert(error.statusText)
        })
      );
    }
    //   console.log("response.noKontrak", response);

    //     if (response.data != null) {
    //       this.dataNull = false
    //       alert('data tidak ditemukan')
    //       console.log("response data length", response.data.length)
    //     } else {
    //       this.dataNull = true
    //       alert('data ditemukan')
    //       console.log('data null true', nk);
    //     }
    //   }
    // );
  }
  messageError = ''
  private handleError(error: HttpErrorResponse){
    this.messageError = error.message;
    return throwError(() => Error("Something bad Happend, please try again later."));
    }

  onSave() {
    this.onUploadFile()
    this.onUploadLessee()
    }



}
