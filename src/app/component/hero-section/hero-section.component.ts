import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, combineLatest, filter, map, switchMap, timeInterval } from 'rxjs';
import { popular } from 'src/app/models/popular';
import { Movie } from 'src/app/models/movie';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { Result } from 'src/app/models/trending';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})


export class HeroSectionComponent implements OnInit {
  constructor(public service: MoviesService) {}
  [x: string]: any;


  $dayOrWeek=new BehaviorSubject<'day'|'week'>('day')
  $movieOrTv=new BehaviorSubject<'tv'|'movie'>('tv')

   $filter = combineLatest({
    time:this.$dayOrWeek,
    show:this.$movieOrTv
  })

  toggle(data:'day'|'week') {
    this.$dayOrWeek.next(data)
    console.log(this.$dayOrWeek.value)
  }

  toggle2(data:'movie'|'tv'){
      this.$movieOrTv.next(data)
  }

  profile?: Observable<User[]>
  popular?: Observable<popular[]>;
  TrendingMovies?: Observable<Result[]>;

  imageUrl: string = 'https://image.tmdb.org/t/p/w500/';
  imageUrl1: string = 'https://image.tmdb.org/t/p/original/';


  ngOnInit(): void {
    //----------Users------------
    this.profile = this.service.getUsers()


    // ----------trending----------
    this.TrendingMovies = this.$filter.pipe(switchMap(({time,show})=>this.service.TrendingMovie(show,time)))


  //  -------popular----------
  this.popular = this.service.getPopular()

  // this.service.GetDeatils()

  }


  customOptions: OwlOptions = {
    loop: true,
    autoWidth: true,
    mouseDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      50: {
        items: 1,
      },
      100: {
        items: 1,
      },
    },
  };
}

