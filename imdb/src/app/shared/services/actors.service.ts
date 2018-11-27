import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ActorsService {
  constructor(private http: HttpClient) {}

  listActors() {
    return this.http.post(environment.routes.listActors, "", {});
  }
}
