import { Component, OnInit } from '@angular/core';
import {IKontrak, IKontrakWrapper} from "../../interfaces/i-kontrak";
import {KontrakService} from "../../services/kontrak.service";
import {IUser} from "../../interfaces/i-user";
import {doc} from "@angular/fire/firestore";

@Component({
  selector: 'app-dokumen',
  templateUrl: './dokumen.component.html',
  styleUrls: ['./dokumen.component.css']
})
export class DokumenComponent implements OnInit {

  constructor(
    private kontrakService: KontrakService
  ) { }

  ngOnInit(): void {
    this.onAll()
    window.print()
  }

  kontrak: IKontrak = {} as IKontrak
  kontraks: Array<IKontrak> = []

  onAll(): void {
    this.kontrakService.allKontrak().subscribe(
      (response: Array<IKontrak>) => {
        let tempData = response;
        this.kontraks = tempData
        console.log("tempdata kontraks", tempData)
        // this.reportss = tempData
        // this.reportFilter = [...new Map(tempData.map(item => [item['coveran'], item])).values()]
      }
    );
  }

}
