import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Bien } from '../interface/bien';
import { Ville} from '../interface/localite';
import { Typebien } from '../interface/typebien';

@Component({
  selector: 'app-immobilier',
  templateUrl: './immobilier.component.html',
  styleUrls: ['./immobilier.component.css']
})
export class ImmobilierComponent implements OnInit {
  public localites: Ville[];
  public typebiens: Typebien[];

  constructor(private servicecatalogue: CatalogueService) { }
p: number = 1;
private biens: Bien[];
  ngOnInit() {
    this.servicecatalogue.listeBien().subscribe(data => this.biens = data.data as Bien[] );
    this.servicecatalogue.listelocalite().subscribe(data => this.localites = data.data as Ville[] );
    this.servicecatalogue.listetype().subscribe(data => this.typebiens = data.data as Typebien[] );

  }
  search(data) {

  }

}
