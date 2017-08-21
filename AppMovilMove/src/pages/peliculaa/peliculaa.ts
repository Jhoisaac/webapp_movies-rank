import { Component } from '@angular/core';
import { NavController, NavParams,ViewController  } from 'ionic-angular';
import {Pelicula} from '../../interfaces/peliculas.interface';

/**
 * Generated class for the PeliculaaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-peliculaa',
  templateUrl: 'peliculaa.html',
})
export class PeliculaaPage {

  PeliInfo: Pelicula;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.PeliInfo=this.navParams.get('peli');
    console.log(this.navParams.get('peli'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeliculaaPage');
  }
  cerrarModal() {
    this.viewCtrl.dismiss();

  }


}
