import { Typebien } from '../../interface/typebien';
import { Ville } from '../../interface/localite';
import { Component, OnInit} from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';


@Component({
  selector: 'app-formbien',
  templateUrl: './formbien.component.html',
  styleUrls: ['./formbien.component.css']
})
export class FormbienComponent implements OnInit {
  public villes: Ville[];
  public typebiens: Typebien[];
  constructor(private service: CatalogueService ) { }

  ngOnInit() {
    this.service.listeBien().subscribe(data => this.villes = data.data as Ville[] );

    }

}
