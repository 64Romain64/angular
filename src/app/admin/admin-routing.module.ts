import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditionComponent } from '../pages/edition/edition.component';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { EditionAlerteComponent } from './edition-alerte/edition-alerte.component';
import { EditionContactComponent } from './edition-contact/edition-contact.component';
import { EditionGremlinComponent } from './edition-gremlin/edition-gremlin.component';

const routes: Routes = [
  {path:'', component:AdminAccueilComponent, children:[
    {path:'contacts', component:EditionContactComponent},
    {path:'alertes', component:EditionAlerteComponent},
    {path:'gremlins', component:EditionGremlinComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
