import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';
import { Observable, map } from 'rxjs';
import { Movie, MovieResponse } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movieglxy';
  popular!:Observable<Movie[]>
  img_url='https://image.tmdb.org/t/p/w500/'
  img_hd='https://image.tmdb.org/t/p/original/'

  constructor(private movie: MoviesService) {
    //  this.popular =  movie.getPopular()
  }
}
