import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Director} from '../../interfaces/directores.interface';

/**
 * Generated class for the DirectorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-director',
  templateUrl: 'director.html',
})
export class DirectorPage {

  DirctInfo:Director;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.DirctInfo=this.navParams.get('dirc');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectorPage');
  }

}
