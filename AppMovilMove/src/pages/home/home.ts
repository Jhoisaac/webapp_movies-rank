import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {PeliculasProvider} from '../../providers/peliculas/peliculas';
import {Pelicula} from  '../../interfaces/peliculas.interface';
import {PeliculaaPage} from '../peliculaa/peliculaa';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ListPeli: Pelicula[]=[];
  constructor(public navCtrl: NavController, private proCtrl:PeliculasProvider,public modalCtrl: ModalController,) {
    this.proCtrl.getMasvotada().subscribe(
      resp=>{
        for(let i=0; i<3;i++){
          this.ListPeli.push(resp[i]);
        }
      }
    );
  }
  vermas(pel:Pelicula){
    let modal = this.modalCtrl.create(PeliculaaPage,{peli:pel});
    modal.present();
  }

}
