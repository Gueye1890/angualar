import { User } from './../../interface/user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bien } from './../../interface/bien';
import { Ville } from './../../interface/localite';
import { CatalogueService } from './../../services/catalogue.service';
import { Client } from './../../interface/client';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  connexion = true;
  private client: Client;
  private user: User[];
  public villes: Ville;
erreurr = false;
  constructor(
    private route: ActivatedRoute,
    private reservation: CatalogueService,
    private router: Router) { }


  ngOnInit() {
  }
  send(connectForm) {
    const id = +this.route.snapshot.paramMap.get('id');
if (id === 0 ) {
this.user = connectForm as User[];
this.reservation.login(this.user).subscribe(donnes => {
  if (donnes['data'].length === 0) {
    this.erreurr = true;
  }
  localStorage.setItem('user', donnes['data']);
  this.router.navigate(['admin']);
  console.log(donnes);

});
}
   else{ this.client = connectForm as Client;
    console.log(this.client);
    this.reservation.addReservation(id, this.client).subscribe(rese => {
    });
  }
  }

}
