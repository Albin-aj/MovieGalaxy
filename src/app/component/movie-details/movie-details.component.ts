import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Movie, MovieDetails, MovieResponse, } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

   $data?:Observable<MovieDetails>
   imageUrl1: string = 'https://image.tmdb.org/t/p/original/'

  constructor(private service:MoviesService, private Route:ActivatedRoute){ }
  id!:string
  ngOnInit(): void {

  this.$data = this.Route.params.pipe(switchMap(params=>this.service.GetDeatils(params['id'])))

  // this.Route.params.subscribe(params=>{
  //   this.id = params['id']
  // })
  //     this.$data= this.service.GetDeatils(this.id)

  }
}


