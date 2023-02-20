import { Component, OnInit } from '@angular/core';
import {ILessee, ILesseeWrapper} from "../../interfaces/i-lessee";
import {LesseeService} from "../../services/lessee.service";
import {KontrakService} from "../../services/kontrak.service";
import {IKontrak, IKontrakWrapper} from "../../interfaces/i-kontrak";
import {IFiles, IFilesWrapper} from "../../interfaces/i-files";
import {FilesService} from "../../services/files.service";

@Component({
  selector: 'app-list-persyaratan',
  templateUrl: './list-persyaratan.component.html',
  styleUrls: ['./list-persyaratan.component.css']
})
export class ListPersyaratanComponent implements OnInit {

  constructor(
    private lesseService : LesseeService,
    private kontrakService : KontrakService,
    private fileService: FilesService
  ) { }

  ngOnInit(): void {
    this.onAll()
    this.onAllKontrak()
    this.onAllFiles()
  }

  dataNull: boolean = false
  lessess: Array<ILessee> = [];

  files: Array<IFiles> = [];

  kontraks: Array<IKontrak> = []
  dtOptions: DataTables.Settings = {};

  onAll(): void {
    this.lesseService.all().subscribe(
      (response: ILesseeWrapper) => {
        let tempData = response.data;
        this.lessess = tempData
        console.log('lesse:', this.lessess)
        // this.reportss = tempData
        // this.reportFilter = [...new Map(tempData.map(item => [item['coveran'], item])).values()]
      }
    );
  }

  onAllKontrak(): void {
    this.kontrakService.allKontrak().subscribe(
      (response: Array<IKontrak>) => {
        let tempDatak = response;
        this.kontraks = tempDatak;
        console.log('kontraks', this.kontraks)
      }
    );
  }

  onAllFiles(): void {
    this.fileService.allFiles().subscribe(
      (response: IFilesWrapper) => {
        let tempDataFile = response.data;
        this.files = tempDataFile;
        console.log('files', this.files)
      }
    );
  }

}
