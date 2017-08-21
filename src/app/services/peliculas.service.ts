import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/RX';
import {Pelicula} from '../interfaces/peliculas.interface';
import {Comentario} from '../interfaces/comentarios.interface';


@Injectable()
export class PeliculasService {

  urlPelicula: string = 'http://api-soa-2017.mundo-libre.me/api';

  constructor(private http: Http) { }

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

  verPelicula(comen: Comentario, id: string) {
    // let body = JSON.stringify(comen);
    // let headers = new Headers({
    //   'Content-Type': 'application/json',
    //   // 'Authorization': 'Bearer ' + this.authenticationService.token
    // });
    // let url = `${this.urlPelicula}/peliculas/${idPeli}`;
    // return this.http.put(url, body, {headers: headers}).map(
    //   resultado => {
    //     return resultado.json;
    //   }
    // );
    let urls = `${this.urlPelicula}/pelicula/${id}`;

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
          console.log( res.json() );
          return res.json();
        }
      );
  }

}
