import { Component } from '@angular/core';
import { NavController, NavParams,ViewController ,ToastController  } from 'ionic-angular';
import {Pelicula} from '../../interfaces/peliculas.interface';
import  {Coment} from  '../../interfaces/coment.interfaces';
import {ComentariosProvider} from '../../providers/comentarios/comentarios';

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
  ComentarioNew:Coment ={
      usuario:"",
      contenido:"",
      pelicula:""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public viewCtrl: ViewController,
              private comCtrl:ComentariosProvider,
              public toastCtrl: ToastController) {
    this.PeliInfo=this.navParams.get('peli');
    console.log(this.navParams.get('peli'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeliculaaPage');
  }
  cerrarModal() {
    this.viewCtrl.dismiss();
  }

  Comentar(id:string){
    this.ComentarioNew.pelicula=id;
    console.log(this.ComentarioNew);
    this.comCtrl.addComent(this.ComentarioNew).subscribe(
      resp=>{
        this.presentToast('Gracias por su aporte');
      }
    )
  }
  presentToast(msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
