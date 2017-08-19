import { Component, OnInit } from '@angular/core';
import { Director } from '../../interfaces/directores.interface';
import { ActoresService } from '../../services/actores.service';

@Component({
  selector: 'app-directores',
  templateUrl: './directores.component.html',
  styles: []
})
export class DirectoresComponent implements OnInit {
  actor: Director[] = [];
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
