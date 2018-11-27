import { NgModule, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home/home.component";
import { EditMovieComponent } from "./edit-movie/edit-movie.component";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { EditMovieHeaderComponent } from "./edit-movie/edit-movie-header/edit-movie-header.component";
import { AddMovieHeaderComponent } from "./add-movie/add-movie-header/add-movie-header.component";
import { HomeHeaderComponent } from "./home/home-header/home-header.component";
import { ListMoviesComponent } from "./home/list-movies/list-movies.component";
import { CardComponent } from "./home/card/card.component";
import { FooterComponent } from "./shared/footer/footer.component";

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, FormsModule],
  declarations: [
    HomeComponent,
    EditMovieComponent,
    AddMovieComponent,
    EditMovieHeaderComponent,
    AddMovieHeaderComponent,
    HomeHeaderComponent,
    ListMoviesComponent,
    CardComponent,
    FooterComponent
  ],
  providers: [SharedModule]
})
export class HomeModule implements OnInit {
  ngOnInit() {
    console.log("in home module");
  }
}
