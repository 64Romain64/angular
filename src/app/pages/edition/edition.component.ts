import { Component, OnInit } from '@angular/core';
import { GremlinsI } from 'src/app/systeme/modeles/gremlins';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  creation:GremlinsI = <GremlinsI>{};

  constructor() { }

  ngOnInit(): void {
  }

}
