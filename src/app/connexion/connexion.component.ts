import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserI } from '../systeme/modeles/user-i';
import { AuthService } from '../systeme/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  // user:{identifiant:string, motdepasse:string} = {identifiant:'Romain', motdepasse:''}
  // user:UserI = {identifiant:'Romain', motdepasse:''}
  user: UserI = <UserI>{}; 

  constructor(public authServ:AuthService) { }

  ngOnInit(): void {
  }

  logUser(){
    console.log(this.user)
  }

  // Fonction appelée par le HTML à la validation du formulaire - decommenter ligne 2 connexion.component.html
  // valideID(formulaire:NgForm){
  //   console.log(formulaire.value)
  // }

   // Fonction appelée par le HTML à la validation du formulaire - decommenter ligne 3 connexion.component.html
   valideID(){
    console.log(this.user);
    console.log(this.authServ);
    this.authServ.getID(this.user);
    
   }
}
