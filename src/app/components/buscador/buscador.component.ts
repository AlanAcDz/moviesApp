import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  buscar = '';
  loading = false;
  constructor(public pelisServ: PeliculasService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['texto']) {
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
    });
  }
  buscarPelicula() {
    if (this.buscar.length === 0) {
      return;
    }
    this.loading = true;
    this.pelisServ.buscarPelicula(this.buscar).subscribe(() => this.loading = false);
  }
}
