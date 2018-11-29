import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AddProducerService {
  addProducerShowHide: Boolean;
  constructor() {
    this.addProducerShowHide = false;
  }
  hideAddProducer() {
    this.addProducerShowHide = false;
  }
  showAddProducer() {
    this.addProducerShowHide = true;
  }
}
