import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Coment} from '../../interfaces/coment.interfaces';

/*
  Generated class for the ComentariosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ComentariosProvider {

  urlComentario: string =     "http://api-soa-2017.mundo-libre.me/api/";

  constructor(public http: Http) {
    console.log('Hello ComentariosProvider Provider');
  }

  addComent(Coment1:Coment){
    let body = JSON.stringify(Coment1);
    return this.http.post(`${this.urlComentario}comentario`,body).map(
      resp=>{
        return resp.json() ;
      }
    )

  }



}
