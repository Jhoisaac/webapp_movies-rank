import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController ,LoadingController } from 'ionic-angular';
import {DirectoresProvider} from '../../providers/directores/directores';
import {Director} from '../../interfaces/directores.interface';
import {DirectorPage} from '../director/director';
import {isUndefined} from "util";

/**
 * Generated class for the DirectoresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-directores',
  templateUrl: 'directores.html',
})
export class DirectoresPage {

  ListDirectores:Director[]=[];
  bandera:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private dirctrl:DirectoresProvider,
              public popoverCtrl: PopoverController,
              public loadingCtrl: LoadingController) {
    this.getDirectores()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectoresPage');
  }

  getDirectores(){
    this.presentLoading().present();
    this.dirctrl.getDirectores().subscribe(
      resp=>{
        this.ListDirectores=resp;
        console.log("directores");
        this.presentLoading().dismissAll();
        this.bandera=false;
      },err=>{
        this.presentLoading().dismissAll();
        this.bandera=true;
      }
    );
  }

  presentPopover(dirc:Director) {
    let popover = this.popoverCtrl.create(DirectorPage,{dirc:dirc});
    popover.present();
  }
  presentLoading() {
    return this.loadingCtrl.create({
      content: "Conectando con el servidor...",
      duration: 3000
    });

  }

  getItems(ev: any) {
    // Reset items back to all of the items


    // set val to the value of the searchbar
    let val = ev.target.value;
    if( isUndefined(val)){
      this.getDirectores();
    }
    else
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.ListDirectores = this.ListDirectores.filter((item) => {
        return (item.nombre[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else if(val.trim()==''){
      this.getDirectores();
    }
  }

}
