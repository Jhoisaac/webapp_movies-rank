import { Component, OnInit } from '@angular/core';
import {Pelicula} from '../../interfaces/peliculas.interface';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: []
})
export class PeliculasComponent implements OnInit {

  pelicula: Pelicula[] = [];
  constructor(private peliculaService: PeliculasService) {

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

}
