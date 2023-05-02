import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { HeroSectionComponent } from './component/hero-section/hero-section.component';

const routes: Routes = [
  {path:'single/:id',component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
