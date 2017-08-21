/**
 * Created by Diego Villavicencio on 18/8/2017.
 */
import {RouterModule, Routes} from '@angular/router';
import { ActoresComponent } from './components/actores/actores.component';
import { DirectoresComponent } from './components/directores/directores.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { HomeComponent } from './components/home/home.component';

const  APP_ROUTES: Routes = [

  {path: '', component: HomeComponent},
  {path: 'actores', component: ActoresComponent},
  {path: 'directores', component: DirectoresComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'comentarios', component: ComentarioComponent},

  {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


