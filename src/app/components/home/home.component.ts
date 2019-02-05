import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cartelera: any;
  populares: any;
  kids: any;
  constructor(private pelisServ: PeliculasService) {
    this.pelisServ.getCartelera().subscribe(peliculas => {
      this.cartelera = peliculas;
    });
    this.pelisServ.getPopulares().subscribe(peliculas => {
      this.populares = peliculas;
    });
    this.pelisServ.getKidMovies().subscribe(peliculas => {
      this.kids = peliculas;
    });
  }
}
