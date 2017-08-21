import { Component } from '@angular/core';
import { NavController, NavParams,ModalController ,LoadingController } from 'ionic-angular';
import {Pelicula} from '../../interfaces/peliculas.interface';
import {PeliculasProvider} from  '../../providers/peliculas/peliculas';
import {PeliculaaPage} from '../peliculaa/peliculaa';
import {isUndefined} from "util";
/**
 * Generated class for the PeliculasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-peliculas',
  templateUrl: 'peliculas.html',
})
export class PeliculasPage {

  ListPeliculas:Pelicula[] =[];
  startIndex=0;
  perpage=10;
  bandera=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private  pelictrl: PeliculasProvider,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController) {

    this.getPelis();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeliculasPage');
  }

  presentModal(peliEli:Pelicula) {
    let modal = this.modalCtrl.create(PeliculaaPage,{peli:peliEli});
    modal.present();
  }

  getPelis(){

    this.presentLoading().present();
    this.pelictrl.getPeliculas().subscribe(
      resp=>{
        this.ListPeliculas=resp;
        console.log("autores");
        this.presentLoading().dismissAll();
        this.bandera=false;
      },err=>{
        this.presentLoading().dismissAll();
        this.bandera=true;
        this.ListPeliculas=[];
      }
    );
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
      this.getPelis();
    }
    else
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.ListPeliculas = this.ListPeliculas.filter((item) => {
        return (item.titulo[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else if(val.trim()==''){
      this.getPelis();
    }
  }



}
