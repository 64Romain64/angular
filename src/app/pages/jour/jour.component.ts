import { Component, OnInit } from '@angular/core';
import { GremlinsI } from 'src/app/systeme/modeles/gremlins';
import { GremlinsService } from 'src/app/systeme/services/gremlins.service';

@Component({
  selector: 'app-jour',
  templateUrl: './jour.component.html',
  styleUrls: ['./jour.component.css'],
})
export class JourComponent implements OnInit {
  bool: boolean = false;
  debut = 0; // Début de pagination
  fin = 4; // Fin de pagination
  ecart = 4; // Ecart de pagination
  tri = ''; // variable servant a appliquer un tir dans les donnés en l'injectant dans le PIPE méchants
  triNom = '';

  constructor(public gremlinsServ: GremlinsService) {}

  ngOnInit(): void {
    console.log(this.gremlinsServ);
  }
  // Afficher des données envoyées par le gremlins quand on clique desssus
  logGremlins(g: GremlinsI) {
    console.log(g);
  }

  paginationPLus() {
    if (this.fin < this.gremlinsServ.gremlins.length) {
      this.debut += this.ecart;
      this.fin += this.ecart;
    }
    console.log(this.debut, this.fin);
  }
  logTri() {
    console.log(this.tri);
  }

  paginationMoins() {
    if (this.debut > this.ecart) {
      this.debut -= this.ecart;
      this.fin -= this.ecart;
    }
    console.log(this.debut, this.fin);
  }
}
