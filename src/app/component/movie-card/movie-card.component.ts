import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { popular } from 'src/app/models/popular';
import { Result, Trending } from 'src/app/models/trending';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  constructor(private service:MoviesService){}

  imageUrl: string = 'https://image.tmdb.org/t/p/w500/';
  imageUrl1: string = 'https://image.tmdb.org/t/p/original/';

  @Input() movieData?:any


  passID(id:number){
    this.service.id$.next(id)


  }

ngOnInit(): void {
  console.log(this.movieData);
}



}
