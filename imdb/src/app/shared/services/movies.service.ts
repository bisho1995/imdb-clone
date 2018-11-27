import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../environments/environment";
import { Movie } from "../../home/interfaces/movie";
@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  listMovies(): Observable<Movie[]> {
    const options = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    };
    return this.http.post<Movie[]>(environment.routes.listMovies, "", options);
  }
}
