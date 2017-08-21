import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ActoresProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ActoresProvider {

  urlActor: string = 'http://api-soa-2017.mundo-libre.me/api/';

  constructor(public http: Http) {
    console.log('Hello ActoresProvider Provider');
  }

  getActores(){
    return this.http.get(this.urlActor+'actores').map(
      resp=> {
        return resp.json();
      }
    )

  }
  getActor(id:string) {

    return this.http.get(this.urlActor+'actor'+id).map(
      resp=>{
        return resp.json();
      }
    );
  }


}
