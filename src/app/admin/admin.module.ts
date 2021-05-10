import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminAccueilComponent } from './admin-accueil/admin-accueil.component';
import { EditionGremlinComponent } from './edition-gremlin/edition-gremlin.component';
import { EditionContactComponent } from './edition-contact/edition-contact.component';
import { EditionAlerteComponent } from './edition-alerte/edition-alerte.component';
import { GremlinsEditionService } from './systeme/service/gremlins-edition.service';


@NgModule({
  declarations: [AdminAccueilComponent, EditionGremlinComponent, EditionContactComponent, EditionAlerteComponent],
  providers:[GremlinsEditionService],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {}
