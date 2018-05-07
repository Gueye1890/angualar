
import { NgForm } from '@angular/forms';
import { Bien } from './../../interface/bien';
import { Ville } from './../../interface/localite';
import { CatalogueService } from './../../services/catalogue.service';
import { Client } from './../../interface/client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
connexion = true;
client: Client;
public villes: Ville;

  constructor(
    private route: ActivatedRoute,
    private reservation: CatalogueService
  ) { }

  ngOnInit() {

  }
send(bienForm) {
  this.client = bienForm as Client;
  const id = +this.route.snapshot.paramMap.get('id');
  console.log(this.client);
  this.reservation.addReservation(id, this.client).subscribe(rese => {

  });
}
}
