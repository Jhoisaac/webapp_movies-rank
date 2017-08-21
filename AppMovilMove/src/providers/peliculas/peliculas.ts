import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeliculasProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PeliculasProvider {


  urlPelicula: string = 'http://api-soa-2017.mundo-libre.me/api/';
  constructor(public http: Http) {
    console.log('Hello PeliculasProvider Provider');
  }


  getPeliculas(){
    return this.http.get(this.urlPelicula+'peliculas').map(
      resp=> {
        return resp.json();
      }
    )

  }
  getPelicula(id:string) {

    return this.http.get(this.urlPelicula+'pelicula'+id).map(
      resp=>{
        return resp.json();
      }
    );
  }

}
