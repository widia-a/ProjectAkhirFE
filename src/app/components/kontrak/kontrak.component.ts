import {Component, Input, OnInit} from '@angular/core';
import { ILoginWrapper, IUser, IUserWrapper } from 'src/app/interfaces/i-user';
import { UserService } from 'src/app/services/user.service';
import {ILessee, ILesseeWrapper} from "../../interfaces/i-lessee";
import {IKontrak, IKontrakWrapper} from "../../interfaces/i-kontrak";
import {catchError, throwError} from "rxjs";
import {KontrakService} from "../../services/kontrak.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-kontrak',
  templateUrl: './kontrak.component.html',
  styleUrls: ['./kontrak.component.css']
})
export class KontrakComponent implements OnInit {

  user: IUser = {} as IUser
  users: Array<IUser> = []
  dataNull: boolean = false

  @Input() kontrak:IKontrak = {} as IKontrak

  constructor(
    private kontrakService: KontrakService
  ) { }

  ngOnInit(): void {
  }

  onAll(): void {
    this.kontrakService.all().subscribe(
      (response: IUserWrapper) => {
        this.users = response.data
      }
    );
  }

  private handleError(error: HttpErrorResponse){
    this.messageError = error.message;
    return throwError(() => Error("Something bad Happend, please try again later."));
  }
  messageError = ''
  onSubmitKontrak(){
    console.log("submit kontrak", this.kontrak)
    this.kontrakService.create(this.kontrak)
      .pipe(catchError(this.handleError))
      .subscribe((response: IKontrakWrapper) => {
          console.log(response);
          alert('Data Berhasil Ditambahkan');
        },
        (error: any) => {
          this.messageError = error.message;
        })
    this.kontrak.noKontrak = ''
    this.kontrak.namaSup = ''
    this.kontrak.alamatSup = ''
    this.kontrak.picSup = ''
    this.kontrak.namaKons = ''
    this.kontrak.alamatKons = ''
    this.kontrak.tenor = ''
    this.kontrak.persenBiaya = ''
    this.kontrak.persenHarga = ''
    this.kontrak.namaSigner = ''
    this.kontrak.titleSigner = ''
    this.kontrak.jabatanSigner = ''
    this.kontrak.nilaiPembiayaan = ''
    this.kontrak.nilaiSisa = ''
    this.kontrak.jumlahFasilitas = ''
    this.kontrak.penempatan = ''
    this.kontrak.hargaUnit = ''
    this.kontrak.jumlahUnit = ''
    this.kontrak.tipeUnit = ''
    this.kontrak.unit = ''
    this.kontrak.merkUnit = ''
  }

}
