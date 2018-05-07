import { Router } from '@angular/router';
import { Reservation } from './../reservation';
import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {
  reservations: Reservation[];
  agent=false;
  client=false;
  constructor(private servicecatalogue: CatalogueService , private router : Router) { }
activeagent(){
  this.agent=true;
  this.client=false;
}
activateclient(){
  this.client=true;
  this.agent=false;
}
  ngOnInit() {
    this.servicecatalogue.listerReservation().subscribe(data => {
      console.log(data);
      this.reservations = data.donnees.reservation as Reservation[];
    });
  }
logout() {
  this.servicecatalogue.logout();
  this.router.navigate(['/connexion']);
}
}
