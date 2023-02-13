import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-persyaratan',
  templateUrl: './list-persyaratan.component.html',
  styleUrls: ['./list-persyaratan.component.css']
})
export class ListPersyaratanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dtOptions: DataTables.Settings = {};

}
