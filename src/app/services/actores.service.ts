import { Injectable } from '@angular/core';
import { Actor } from '../interfaces/actores.interface';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/RX';
//import {AuthenticationService} from "./authentication.service";

@Injectable()
export class ActoresService {

  urlActor: string = 'http://35.194.35.240/api/actores';

  constructor(private http: Http) { }

  // getActor(indice: string) {
  //   let urls = `${this.urlActor}/${ indice}`;
  //   return this.http.get(urls)
  //     .map(
  //       res => {
  //         return res.json();
  //       }
  //     );
  // }

  getActor(indice: string) {
    // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    // let options = new RequestOptions({ headers: headers });
    let urls = `${this.urlActor}/actor/${indice}`;

    return this.http.get(urls)
      .map(
        res => {
          console.log(res.json());
          return res.json();
        }
      );
  }

  consultarActor() {
    // let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    // let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.urlActor}/actores`)
      .map(
        res => {
          console.log( res.json() );
          return res.json();
        }
      );
  }

}
