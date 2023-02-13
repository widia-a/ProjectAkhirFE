import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  daftarFitur: any = [
    {
      "title": "Order Resume ",
      "link":  "/order"
    },
    {
      "title": "List Resume",
      "link": "/list"
    },
    {
      "title": "Input Kontrak",
      "link": "/kontrak"
    },
    {
      "title": "Print",
      "link": "/print"
    }
  ];

  constructor(
    private storageService: StorageService,

    private router: Router,
  ) { }

  ngOnInit(): void {
    this.UserLoggedIn()
    // alert(this.storageService.getKey('name'))
  }

  defaultURL: string = "/login"
  uname = this.storageService.getKey('name')

  order : boolean = true
  listOrder : boolean = false
  kontrak : boolean = false
  dokumen : boolean = false

  orderActive : boolean = true
  listActive : boolean = false
  kontrakActive : boolean = false

  isCollapsed = false

  onOrder(){
    this.order = true
    this.listOrder = false
    this.kontrak = false
    this.orderActive = true
    this.listActive = false
    this.kontrakActive = false
    this.dokumen = false
  }

  onList(){
    this.order = false
    this.listOrder = true
    this.kontrak = false
    this.orderActive = false
    this.listActive = true
    this.kontrakActive = false
    this.dokumen = false

  }

  onKontrak(){
    this.order = false
    this.listOrder = false
    this.kontrak = true
    this.orderActive = false
    this.listActive = false
    this.kontrakActive = true
    this.dokumen = false

  }

  onPrintPage(){
    this.order = false
    this.listOrder = false
    this.kontrak = false
    this.orderActive = false
    this.listActive = false
    this.kontrakActive = true
    this.dokumen = true

  }

  UserLoggedIn(): boolean{
    if (this.storageService.check('nip')){
      return true;
    }
    return false;
  }

  onLogout(): void{
    this.storageService.clear('nip');
    this.storageService.clear('name');
    this.router.navigate([this.defaultURL])
  }

}
