import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class ProducersService {
  constructor(private http: HttpClient) {}

  listProducers() {
    return this.http.post(environment.routes.listProducers, "", {});
  }
}
