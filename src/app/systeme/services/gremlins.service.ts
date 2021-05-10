import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GremlinsI } from '../modeles/gremlins';

@Injectable({
  providedIn: 'root'
})
export class GremlinsService {

   gremlins:Array<GremlinsI>; // Tableau de gremlins typé
  // gremlins:any;

  constructor(private http:HttpClient) {
    this.gremlins = []
    this.getGremlins();
   }

   // Appeler des données externes
   getGremlins(){
     this.http.get<Array<GremlinsI>>('assets/gremlins.json').subscribe(data => {
       console.log(data);
       this.gremlins = data
     });
   }
  // // Marche avec la ligne 11
  //  getGremlins(){
  //   this.http.get('assets/gremlins.json').subscribe(data => {
  //     console.log(data);
  //     this.gremlins = data
  //   });
}
