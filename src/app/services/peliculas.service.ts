import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private urlMoviesDb = 'https://api.themoviedb.org/3';
  private apiKey = 'c39617b6e40abfcfe893cbd68341ce30';
  private urlEnd = 'language=es&callback=JSONP_CALLBACK';
  searchResults: any[] = [];
  constructor(private http: HttpClient) {}

  getPopulares() {
    const url = `${ this.urlMoviesDb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apiKey }&${ this.urlEnd }`;
    return this.http.jsonp(url, '').pipe(map((res: any) => res.results));
  }
  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    const desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${ desde.getDate() }`;
    const hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${ hasta.getDate() }`;
    const url = `${ this.urlMoviesDb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apiKey }&${ this.urlEnd }`;
    return this.http.jsonp(url, '').pipe(map((res: any) => res.results));
  }
  getKidMovies() {
    const url = `${ this.urlMoviesDb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apiKey }&${ this.urlEnd }`;
    return this.http.jsonp(url, '').pipe(map((res: any) => res.results));
  }
  buscarPelicula(texto: string) {
    const url = `${ this.urlMoviesDb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apiKey }&${ this.urlEnd }`;
    return this.http.jsonp(url, '').pipe(map((res: any) => {
      this.searchResults = res.results;
      return res.results;
    }));
  }
  getMovie(id: string) {
    const url = `${ this.urlMoviesDb }/movie/${ id }?api_key=${ this.apiKey }&${ this.urlEnd }`;
    return this.http.jsonp(url, '').pipe(map((res: any) => res));
  }
}
