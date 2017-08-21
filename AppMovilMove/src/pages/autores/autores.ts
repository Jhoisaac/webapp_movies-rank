import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController ,LoadingController } from 'ionic-angular';
import {ActoresProvider} from '../../providers/actores/actores';
import {Actor} from '../../interfaces/actores.interface';
import {AutorPage} from '../autor/autor';
import {isUndefined} from "util";

/**
 * Generated class for the AutoresPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-autores',
  templateUrl: 'autores.html',
})
export class AutoresPage {

  bandera:boolean=false;
  ListAutores:Actor [] =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private Actprov: ActoresProvider,
              public popoverCtrl: PopoverController,
              public loadingCtrl: LoadingController) {
    this.getAutores();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutoresPage');
  }

  getAutores(){

    this.presentLoading().present();
    this.Actprov.getActores().subscribe(
      resp=>{
        this.ListAutores=resp;
        console.log("autores");
        this.presentLoading().dismissAll();
        this.bandera=false;
      },err=>{
        this.presentLoading().dismissAll();
        this.bandera=true;
        this.ListAutores=[];
      }
    );
  }
  presentPopover(Act:Actor) {
    let popover = this.popoverCtrl.create(AutorPage,{actor:Act});
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
      this.getAutores();
    }
    else
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.ListAutores = this.ListAutores.filter((item) => {
        return (item.nombre[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else if(val.trim()==''){
      this.getAutores();
    }
  }

}
