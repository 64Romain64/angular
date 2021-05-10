import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GremlinsEditionService {

  constructor(private http:HttpClient) { }

  miseAJourGremlin(){
    this.http.post('assets/php/majGremlins.php', {}).subscribe();
  }

  ajouterLesGremlins(){
    this.http.put('assets/php/ajouteGremlins.php', {}).subscribe();
  }
}
