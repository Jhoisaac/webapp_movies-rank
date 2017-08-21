import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { TabsPage } from '../pages/tabs/tabs';
import {HomePage,AutoresPage,DirectoresPage,PeliculasPage,AutorPage,DirectorPage,PeliculaaPage} from  '../pages/pages.index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActoresProvider } from '../providers/actores/actores';
import { DirectoresProvider } from '../providers/directores/directores';
import { PeliculasProvider } from '../providers/peliculas/peliculas';
import { HttpModule } from '@angular/http';
import { ComentariosProvider } from '../providers/comentarios/comentarios';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AutoresPage ,
    DirectoresPage,
    PeliculasPage,
    AutorPage ,
    DirectorPage,
    PeliculaaPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage ,
    AutoresPage ,
    DirectoresPage,
    PeliculasPage,
    AutorPage,
    DirectorPage,
    PeliculaaPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActoresProvider,
    DirectoresProvider,
    PeliculasProvider,
    ComentariosProvider
  ]
})
export class AppModule {}
