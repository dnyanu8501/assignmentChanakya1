import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { SearchPipe } from './search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AllMoviesComponent,
    SearchPipe,
    SingleMovieComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule { }
