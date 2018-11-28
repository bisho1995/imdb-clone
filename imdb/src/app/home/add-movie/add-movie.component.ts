import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { ActorsService } from "../../shared/services/actors.service";
import { ProducersService } from "../../shared/services/producers.service";
@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.css"]
})
export class AddMovieComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl(""),
    release_year: new FormControl(""),
    poster: new FormControl(""),
    producer: new FormControl(""),
    actors: new FormControl("")
  });
  actorSubscription: any;
  actors: any[];
  selectedActors: any[];

  producerSubscription: any;
  producers: any[];
  constructor(
    private actorService: ActorsService,
    private producerService: ProducersService
  ) {}

  ngOnInit() {
    this.startSubscriptionForActors();
    this.startSubscriptionForProducers();
    this.observeFormValueChanges();
  }
  observeFormValueChanges() {
    this.addForm.valueChanges.subscribe(() => {
      this.findId();
    });
  }
  startSubscriptionForActors() {
    this.actorSubscription = this.actorService
      .listActors()
      .subscribe(actors => (this.actors = actors["result"]));
  }
  stopSubscriptionForActors() {
    this.actorSubscription.unsubscribe();
  }
  stopSubscriptionForProducers() {
    this.producerSubscription.unsubscribe();
  }
  startSubscriptionForProducers() {
    this.producerSubscription = this.producerService
      .listProducers()
      .subscribe(producer => (this.producers = producer["results"]));
  }
  formSubmit() {
    console.log(this.addForm.value);
  }
  public findId() {
    const ids = this.addForm.value.actors;
    const list = this.actors.filter(actor => ids.includes(actor.id));
    this.selectedActors = list;
  }
}
