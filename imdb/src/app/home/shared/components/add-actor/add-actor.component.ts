import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { ActorsService } from "../../../../shared/services/actors.service";
import { AddActorService } from "../../services/add-actor.service";

@Component({
  selector: "app-add-actor",
  templateUrl: "./add-actor.component.html",
  styleUrls: ["./add-actor.component.scss"]
})
export class AddActorComponent implements OnInit {
  addActor = new FormGroup({
    name: new FormControl(""),
    sex: new FormControl(""),
    dob: new FormControl(""),
    bio: new FormControl("")
  });
  constructor(
    private actorService: ActorsService,
    private addActorService: AddActorService
  ) {}

  ngOnInit() {}
  saveActor() {
    this.actorService
      .addActor(
        this.addActor.value.name,
        this.addActor.value.sex,
        this.addActor.value.dob,
        this.addActor.value.bio
      )
      .subscribe(result => {
        this.addActor.reset();
      });
  }
  removeScreen() {
    this.addActorService.hideAddActor();
  }
}
