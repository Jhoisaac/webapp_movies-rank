import { Component, OnInit } from '@angular/core';
import { Director } from '../../interfaces/directores.interface';
import { DirectoresService } from '../../services/directores.service';

@Component({
  selector: 'app-directores',
  templateUrl: './directores.component.html',
  styles: []
})
export class DirectoresComponent implements OnInit {
  actor: Director[] = [];
  constructor(private directorService: DirectoresService) {

    this.directorService.consultarDirector()
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
