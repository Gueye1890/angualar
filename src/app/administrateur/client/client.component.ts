import { Component, OnInit ,ViewChild } from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';
import { Client } from './../../interface/client';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  displayedColumns = ['nom', 'adresse', 'nomidtypebien', 'localite' , 'details' ];
  dataSource: MatTableDataSource<Client>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private servicecatalogue:CatalogueService) { }
private client:Client[];
  ngOnInit() {
     this.servicecatalogue.listeclient().subscribe(data => {
      console.log(data);
      this.client = data['data'] as Client[];
      this.dataSource = new MatTableDataSource(this.client);
      console.log(this.dataSource);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 }
 applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  

}
