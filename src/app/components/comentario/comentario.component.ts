import { Component, OnInit } from '@angular/core';
import {Comentario} from '../../interfaces/comentarios.interface';
import { ComentariosService } from '../../services/comentarios.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styles: []
})
export class ComentarioComponent implements OnInit {

  comentario: Comentario[] = [];
  constructor(private comentarioService: ComentariosService) {

    this.comentarioService.consultarComentario()
      .subscribe(
        resultado => {
          this.comentario = resultado;
          console.log(resultado);
        }
      );
  }

  ngOnInit() {
  }

}
