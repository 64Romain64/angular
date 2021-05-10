import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { PiedComponent } from './pied/pied.component';
import { JourComponent } from './pages/jour/jour.component';
import { NuitComponent } from './pages/nuit/nuit.component';
import { DelugeComponent } from './pages/deluge/deluge.component';
import { Erreur404Component } from './systeme/erreur404/erreur404.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { GremlinsService } from './systeme/services/gremlins.service';
import { ContactComponent } from './pages/contact/contact.component';
import { EditionComponent } from './pages/edition/edition.component';
import { GremlinComponent } from './pages/gremlin/gremlin.component';
import { GizmoComponent } from './pages/gizmo/gizmo.component';
import { MogwaiComponent } from './pages/mogwai/mogwai.component';
import { AuthService } from './systeme/services/auth.service';
import { ConService } from './systeme/services/con.service';
import { MechantsPipe, NomsPipe } from './systeme/filtres/mechants.pipe';
import { AuthInterceptor } from './systeme/securite/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    PiedComponent,
    JourComponent,
    NuitComponent,
    DelugeComponent,
    Erreur404Component,
    ConnexionComponent,
    ContactComponent,
    EditionComponent,
    GremlinComponent,
    GizmoComponent,
    MogwaiComponent,
    MechantsPipe,
    NomsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GremlinsService,
    AuthService,
    ConService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
