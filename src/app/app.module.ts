import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {APP_ROUTING} from './app.routes';

//servicios
import { ActoresService } from './services/actores.service';

// import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
//
// import { AuthenticationService } from './services/authentication.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ActoresComponent } from './components/actores/actores.component';
import { DirectoresComponent } from './components/directores/directores.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ActoresComponent,
    DirectoresComponent,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ActoresService,
//    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
