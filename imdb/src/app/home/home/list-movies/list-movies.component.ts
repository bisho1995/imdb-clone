import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../../shared/services/movies.service";

import { Movie } from "../../interfaces/movie";

@Component({
  selector: "app-list-movies",
  templateUrl: "./list-movies.component.html",
  styleUrls: ["./list-movies.component.css"]
})
export class ListMoviesComponent implements OnInit {
  public movies: Movie[];
  constructor(private movie: MoviesService) {}

  ngOnInit() {
    this.movie.movies.subscribe(movies => (this.movies = movies));
  }
}
