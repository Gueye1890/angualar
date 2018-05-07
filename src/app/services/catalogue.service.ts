import { User } from './../interface/user';
import { Client } from './../interface/client';
import { Bien } from '../interface/bien';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { environment } from '../../environments/environment.prod';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()
export class CatalogueService {
   URLAPI = environment.URL;
  constructor(private http: HttpClient ) { }
  listeBien(): Observable <any> {
    return this.http.get(`${this.URLAPI}allbiens`);
  }
  listetype(): Observable <any> {
    return this.http.get(`${this.URLAPI}alltypebiens`);
  }
  listelocalite(): Observable <any> {
    return this.http.get(`${this.URLAPI}alllocalite`);
  }
  listerReservation(): Observable <any> {
    return this.http.get(`${this.URLAPI}allreservation`);
  }
  bienReserver(): Observable <any> {
    return this.http.get(`${this.URLAPI}/api/bienreserver/{id}`);
  }
  getbienById(id): Observable <any> {
    return this.http.get(`${this.URLAPI}bien/${ id }`);
  }
  addReservation(id, client): Observable <any> {
    return this.http.post(`${this.URLAPI}addreservation/bien/${id}`, JSON.parse(JSON.stringify(client)), httpOptions)
  }
  login(user): Observable <User> {
    return this.http.post<User>(`${this.URLAPI}listeuser`, JSON.parse(JSON.stringify(user)), httpOptions)
  }
  logout() {
    localStorage.removeItem('user');
  }
 listeclient(): Observable <Client> {
    return this.http.get<Client>(`${this.URLAPI}allclient`);
  }
}
