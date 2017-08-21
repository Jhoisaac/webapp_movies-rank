import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Actor} from '../../interfaces/actores.interface';
/**
 * Generated class for the AutorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-autor',
  templateUrl: 'autor.html',
})
export class AutorPage {

  ActorInfo:Actor;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ActorInfo=this.navParams.get('actor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutorPage');
  }

}
