import { NgModule, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home/home.component";
import { EditMovieComponent } from "./edit-movie/edit-movie.component";
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { HeaderComponent } from "./header/header.component";
import { EditMovieHeaderComponent } from './edit-movie/edit-movie-header/edit-movie-header.component';
import { AddMovieHeaderComponent } from './add-movie/add-movie-header/add-movie-header.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    EditMovieComponent,
    AddMovieComponent,
    HeaderComponent,
    EditMovieHeaderComponent,
    AddMovieHeaderComponent
  ],
  providers: [SharedModule]
})
export class HomeModule implements OnInit {
  ngOnInit() {
    console.log("in home module");
  }
}
