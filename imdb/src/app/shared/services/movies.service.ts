import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

import { environment } from "../../../environments/environment";
// import { Movie } from "../../home/interfaces/movie";
@Injectable({
  providedIn: "root"
})
export class MoviesService {
  movies;
  constructor(private http: HttpClient) {
    this.movies = new BehaviorSubject([]);
    this.getMovies();
  }

  getMovies() {
    const options = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    };
    return this.http
      .post(environment.routes.listMovies, "", options)
      .subscribe(movies => {
        this.movies.next(movies);
      });
  }
  addMovie(name, release_year, plot, poster, producer, actors) {
    return new Observable(observer => {
      const body = JSON.stringify({
        name,
        release_year,
        plot,
        poster,
        producer,
        actors
      });
      const options = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
      return this.http
        .post(environment.routes.saveMovies, body, options)
        .subscribe(result => {
          this.getMovies();
          observer.next(result);
        });
    });
  }
  updateMovie(name, release_year, plot, poster, producer, actors, id) {
    return new Observable(observer => {
      const body = JSON.stringify({
        id,
        name,
        release_year,
        plot,
        poster,
        producer,
        actors
      });
      const options = {
        headers: new HttpHeaders({
          "Content-type": "application/json"
        })
      };
      return this.http
        .post(environment.routes.updateMovie, body, options)
        .subscribe(result => {
          this.getMovies();
          observer.next(result);
        });
    });
  }
}
