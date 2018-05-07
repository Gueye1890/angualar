import { Component, OnInit, Input } from '@angular/core';
import { Bien } from '../../interface/bien';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
@Input() bien: Bien;
  constructor() { }

  ngOnInit() {
  }

}
