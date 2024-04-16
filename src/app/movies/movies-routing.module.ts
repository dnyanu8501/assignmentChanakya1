import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path:'',component:AllMoviesComponent},
  {path:'singleMovie/:id',component:SingleMovieComponent},
  {path:'aboutUs',component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
