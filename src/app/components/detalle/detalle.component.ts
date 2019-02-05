import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  pelicula: any;
  pagina: string;
  busqueda = '';
  loading = true;
  constructor(private route: ActivatedRoute,
              public pelisServ: PeliculasService) {
    this.route.params.subscribe(params => {
      this.pagina = params['pag'];
      if (params['busqueda']) {
        this.busqueda = params['busqueda'];
      }
      this.pelisServ.getMovie(params['id']).subscribe(pelicula => {
        this.pelicula = pelicula;
        this.loading = false;
      });
    });
  }
}
