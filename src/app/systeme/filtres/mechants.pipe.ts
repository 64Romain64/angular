import { Pipe, PipeTransform } from '@angular/core';
import { GremlinsI } from '../modeles/gremlins';

@Pipe({
  name: 'mechants',
})
export class MechantsPipe implements PipeTransform {
  transform(gremlinsTab: Array<any>, filtre: string): Array<any> {
    if (!gremlinsTab) return [];
    if (!filtre) return gremlinsTab;

    return gremlinsTab.filter((g) => g.status == filtre);

    // Egal au return d'au dessus :
    // let tab = gremlinsTab.filter(gremlins => gremlins.status == filtre);
    // console.log(tab);
    // return tab;

    // Autre méthode :
    // const tab =[];
    // for (let g of gremlinsTab){
    //   if(g.status == filtre){
    //     tab.push(g)
    //   }
    // }
    // return tab;
  }
}

@Pipe({
  name: 'gremlinNom',
})
export class NomsPipe implements PipeTransform {
  transform(gremlinsTab: Array<any>, filtre: string): Array<any> | any {
    filtre = filtre.toLowerCase();
    if (!gremlinsTab) return [];
    if (!filtre) return gremlinsTab;

    return gremlinsTab.filter(
      (g) =>
        g.nom.toLowerCase().indexof(filtre) != -1 ||
        g.description.toLowerCase().indexof(filtre) != -1
    );
  }
}
