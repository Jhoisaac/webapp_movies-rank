import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/RX';

@Injectable()
export class ComentariosService {

  urlComentario: string = 'http://api-soa-2017.mundo-libre.me/api';

  constructor(private http: Http) { }

  getComentario (indice: string) {
    // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    // let options = new RequestOptions({ headers: headers });
    let urls = `${this.urlComentario}/pelicula/${indice}`;

    return this.http.get(urls)
      .map(
        res => {
          console.log(res.json());
          return res.json();
        }
      );
  }

  consultarComentario() {
    // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    // let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.urlComentario}/peliculas`)
      .map(
        res => {
          console.log( res.json() );
          return res.json();
        }
      );
  }

}
