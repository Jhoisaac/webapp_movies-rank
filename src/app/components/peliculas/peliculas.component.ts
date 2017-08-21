import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../../interfaces/peliculas.interface';
import { PeliculasService } from '../../services/peliculas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: []
})
export class PeliculasComponent implements OnInit {

  pelicula: Pelicula[] = [];
  constructor(private peliculaService: PeliculasService, private router: Router) {

    this.peliculaService.consultarPelicula()
      .subscribe(
        resultado => {
          this.pelicula = resultado;
          console.log(resultado);
        }
      );
  }

  ngOnInit() {
  }

  // VERAPI(id: string) {
  //   this.peliculaService.getPeliculaAPI(this.pelicula[id]).subscribe(
  //     res => {
  //       console.log('Desde guardar');
  //       this.router.navigate(['/comen' ]);
  //       console.log(res);
  //
  //     },
  //     error => {
  //       console.error(error);
  //     }
  //   )
  // }

}
