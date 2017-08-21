import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DirectoresProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DirectoresProvider {

  urlDirector: string = 'http://api-soa-2017.mundo-libre.me/api/';
  constructor(public http: Http) {
    console.log('Hello DirectoresProvider Provider');
  }
  getDirectores(){
    return this.http.get(this.urlDirector+'directores').map(
      resp=> {
        return resp.json();
      }
    )
  }
  getDirector(id:string){
    return this.http.get(this.urlDirector+'director'+id).map(
      resp=>{
        return resp.json();
      }
    );
  }

}
