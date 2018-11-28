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

  addActor(name, sex, dob, bio) {
    const body = JSON.stringify({ name, sex, dob, bio });
    const options = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    };
    return this.http.post(environment.routes.addActor, body, options);
  }
}
