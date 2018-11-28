import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AddActorService {
  addActorShowHide: Boolean;
  constructor() {
    this.addActorShowHide = false;
  }
  hideAddActor() {
    this.addActorShowHide = false;
  }
  showAddActor() {
    this.addActorShowHide = true;
  }
}
