import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Bien } from '../../interface/bien';
import { CatalogueService } from '../../services/catalogue.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {

  constructor(private servicecatalogue: CatalogueService,
    private route: ActivatedRoute,
    private location: Location) { }

    private biens: Bien[];

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.servicecatalogue.getbienById(id).subscribe(data => {this.biens = data.data as Bien[];
      console.log(data);
    }
    );
  }
}
