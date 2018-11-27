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
  actors: any[];
  producers: any[];
  constructor(
    private actorService: ActorsService,
    private producerService: ProducersService
  ) {}

  ngOnInit() {
    this.actorService
      .listActors()
      .subscribe(actors => (this.actors = actors["result"]));
    this.producerService
      .listProducers()
      .subscribe(producer => (this.producers = producer["results"]));
    this.addForm.valueChanges.subscribe(data => {
      console.log(data.actors);
    });
  }
  formSubmit() {
    console.log(this.addForm);
  }
}
