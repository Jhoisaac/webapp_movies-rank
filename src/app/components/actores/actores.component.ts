import { Component, OnInit } from '@angular/core';
import { Actor } from '../../interfaces/actores.interface';
import { ActoresService } from '../../services/actores.service';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.component.html',
  styleUrls: ['./actores.component.css']
})
export class ActoresComponent implements OnInit {
  actor: Actor[] = [];
  constructor(private actorService: ActoresService) {

    this.actorService.consultarActor()
      .subscribe(
        resultado => {
          this.actor = resultado;
          console.log(resultado);
        }
      );
  }

  ngOnInit() {
  }

}
