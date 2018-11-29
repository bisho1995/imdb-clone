import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import * as moment from "moment";

import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class ProducersService {
  producers;
  constructor(private http: HttpClient) {
    this.producers = new Subject();
    this.getProducers();
  }

  getProducers() {
    return this.http
      .post(environment.routes.listProducers, "", {})
      .subscribe(producer => {
        this.producers.next(producer["results"]);
      });
  }
  addProducer(name, sex, dob, bio) {
    return new Observable(observer => {
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
      return this.http
        .post(environment.routes.addProducer, body, options)
        .subscribe(result => {
          observer.next(result);
          this.getProducers();
        });
    });
  }
}
