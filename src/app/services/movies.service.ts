import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MovieDetails } from '../models/movie';
import { BehaviorSubject, Observable, Subject, map, pipe } from 'rxjs';
import { User, Users } from '../models/user';
import { Result, Trending } from '../models/trending';
import { PopularMovies, popular } from '../models/popular';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(private http: HttpClient) {
    // this.id$.subscribe(console.log)
  }




  base_url: string = 'https://api.themoviedb.org/3/';
  api_key: string = 'af3ec5ac4cff3bf7a60c9069f46ed25e';
  showOptions?: 'week' | 'day';

  // -----------Users-----------

  getUsers(): Observable<User[]> {
    return this.http.get<Users>("http://dummyjson.com/user").pipe(map((res) =>{
     return res.users}
    ))
  }



  // ------------trending------------


  TrendingMovie(show:'tv'|'movie',time:'week'|'day'): Observable<Result[]> {
    return this.http.get<Trending>(`${this.base_url}/trending/${show}/${time}`, {
      params: {
        api_key: this.api_key
      }
    }).pipe(map((res) =>{
      return res.results } ))
  }


  // --------------popular--------------

  getPopular(): Observable<popular[]> {
    return this.http.get<PopularMovies>(`${this.base_url}/movie/popular`, {
      params: {
        api_key: this.api_key
      }
    }). pipe(map((res) => {
      return res.results
    }))
  }

    id$ = new Subject<number>()

  // detailsID(id:any){
  //   this.id = id
  //   console.log(this.id);
  // }


   GetDeatils(id:any) :Observable<MovieDetails>{
    console.log('hiiii');
   return this.http.get<MovieDetails>(`${this.base_url}/movie/${id}`, {
     params: {
       api_key: this.api_key
     }
   }).pipe(map((res) => {
     return res
   }))
  }

}
