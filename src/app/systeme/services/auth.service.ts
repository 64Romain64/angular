import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfilI } from '../modeles/profil-i';
import { UserI } from '../modeles/user-i';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  test:string = "Merci";
  erreurHttp:string = '';
  profil:ProfilI= <ProfilI>{};

  constructor(private http:HttpClient) { }

  getID(u:UserI){
    console.log("Depuis le service", u);
    // this.http.get('asset/ids/'+u.identifiant+'@'+u.motdepasse+'.json').subscribe();
    this.http.get<ProfilI>(`assets/ids/${u.identifiant}@${u.motdepasse}.json`).subscribe(data => {
      this.profil = data;
      console.log(this.profil);
      this.erreurHttp = '';
    },
    erreur =>{
      console.log('Erreur recue');
      this.erreurHttp = "Argh une erreur s'est produite ("+erreur+")";
    }
    );
  }

  deconne(){
    this.profil = <ProfilI>{};
  }
}
