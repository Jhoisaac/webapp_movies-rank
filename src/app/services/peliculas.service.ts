import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/RX';
import {Pelicula} from '../interfaces/peliculas.interface';
import {Comentario} from '../interfaces/comentarios.interface';


@Injectable()
export class PeliculasService {

  urlPelicula: string = 'http://api-soa-2017.mundo-libre.me/api';

  constructor(private http: Http) {
  }

  getPelicula(indice: string) {
    // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    // let options = new RequestOptions({ headers: headers });
    let urls = `${this.urlPelicula}/peliculas/${indice}`;

    return this.http.get(urls)
      .map(
        res => {
          console.log(res.json());
          return res.json();
        }
      );
  }

  consultarPelicula() {
    // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    // let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.urlPelicula}/peliculas`)
      .map(
        res => {
          console.log(res.json());
          return res.json();
        }
      );
  }

  // getPeliculaAPI(urlapi: string) {
  //   // let urls = `${this.pokemonAPI}${ urlapi}`;
  //   return this.http.get(urlapi)
  //     .map(
  //       res => {
  //         return res.json();
  //       }
  //     );
  // }


  // getPeliculaAPI(pelicula: Pelicula, id: string) {
  //   let body = JSON.stringify(pelicula);
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   let url = `${this.urlPelicula}/${id}`;
  //   return this.http.get(url).map(
  //     resultado => {
  //       return resultado.json;
  //     }
  //   );
  // }
  //
  // peliculasAPI() {
  //   return this.http.get(this.urlPelicula)
  //     .map(
  //       res => {
  //         console.log('api :' + res);
  //         return res.json();
  //       }
  //     );
  // }
  //
  // getPeliAPI(urlapi: string) {
  //   // let urls = `${this.pokemonAPI}${ urlapi}`;
  //   return this.http.get(urlapi)
  //     .map(
  //       res => {
  //         return res.json();
  //       }
  //     );
  // }

  getPeliculas (id: string) {

    return this.http.get(this.urlPelicula + 'pelicula' + id ).map(
      resp => {
        return resp.json();
      }
    );
  }
}

