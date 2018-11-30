import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { ActorsService } from "../../shared/services/actors.service";
import { AddActorService } from "../shared/services/add-actor.service";
import { ProducersService } from "../../shared/services/producers.service";
import { AddProducerService } from "../shared/services/add-producer.service";
import { MoviesService } from "../../shared/services/movies.service";
@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"]
})
export class AddMovieComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl(""),
    release_year: new FormControl(""),
    poster: new FormControl(""),
    producer: new FormControl(""),
    actors: new FormControl(""),
    plot: new FormControl("")
  });
  actorSubscription: any;
  actors: any[];
  selectedActors: any[];

  producerSubscription: any;
  producers: any[];
  constructor(
    private actorService: ActorsService,
    private producerService: ProducersService,
    public addActorService: AddActorService,
    public addProducerService: AddProducerService,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.getProducers();
    this.getActors();
    this.observeFormValueChanges();
    // this.addForm.valueChanges.subscribe(data => {
    //   console.log(data);
    // });
  }

  getActors() {
    this.actorService.actors.subscribe(actors => {
      this.actors = actors;
    });
  }

  observeFormValueChanges() {
    this.addForm.valueChanges.subscribe(() => {
      this.findId();
    });
  }

  getProducers() {
    this.producerSubscription = this.producerService.producers.subscribe(
      producers => {
        this.producers = producers;
      }
    );
  }
  formSubmit() {
    const {
      name,
      release_year,
      poster,
      producer,
      actors,
      plot
    } = this.addForm.value;
    const actorsStr = actors.join(",");
    this.movieService
      .addMovie(name, release_year, plot, poster, producer, actorsStr)
      .subscribe(result => {
        this.addForm.reset();
      });
  }
  public findId() {
    const ids = this.addForm.value.actors;
    const list = this.actors.filter(actor => ids.includes(actor.id));
    this.selectedActors = list;
  }
}
