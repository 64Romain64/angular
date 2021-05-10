import { Component, OnInit } from '@angular/core';
import { AlertePandemieDeGremlins } from 'src/app/systeme/modeles/alerte-pandemie-de-gremlins';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  alerte:AlertePandemieDeGremlins = <AlertePandemieDeGremlins>{};
  // alerte ={};
  // alerte = <AlertePandemieDeGremlins>{};

  constructor() { }

  ngOnInit(): void {
  }

}
