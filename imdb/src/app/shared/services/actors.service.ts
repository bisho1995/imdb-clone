import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import * as moment from "moment";
import { Subject } from "rxjs";

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ActorsService {
  test;
  actors;
  constructor(private http: HttpClient) {
    this.actors = new Subject();
    this.getActors();
  }

  getActors() {
    this.http.post(environment.routes.listActors, "", {}).subscribe(actors => {
      this.actors.next(actors["result"]);
    });
  }

  addActor(name, sex, dob, bio) {
    const body = JSON.stringify({
      name,
      sex,
      dob: moment(dob).format("DD/MM/YYYY"),
      bio
    });
    const options = {
      headers: new HttpHeaders({
        "Content-type": "application/json"
      })
    };
    this.getActors();
    return this.http.post(environment.routes.addActor, body, options);
  }
}
