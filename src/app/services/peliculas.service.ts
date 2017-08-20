import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/RX';


@Injectable()
export class PeliculasService {

  urlPelicula: string = 'http://35.194.35.240/api';

  constructor(private http: Http) { }

  getPelicula(indice: string) {
    // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    // let options = new RequestOptions({ headers: headers });
    let urls = `${this.urlPelicula}/${indice}`;

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
