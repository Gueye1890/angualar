import { Component, OnInit, ViewChild } from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';
import { Reservation } from '../../reservation';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  displayedColumns = ['nom', 'adresse', 'nomidtypebien', 'localite'];
  dataSource: MatTableDataSource<Reservation>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
private reservations: Reservation[];
  constructor(private servicecatalogue: CatalogueService) { }

  ngOnInit() {
    this.servicecatalogue.listerReservation().subscribe(data => {
      //console.log(data);
      this.reservations = data.data as Reservation[];
      this.dataSource = new MatTableDataSource(this.reservations);
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
