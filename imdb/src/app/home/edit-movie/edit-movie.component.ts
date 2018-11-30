import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

import { ActorsService } from "../../shared/services/actors.service";
import { AddActorService } from "../shared/services/add-actor.service";
import { ProducersService } from "../../shared/services/producers.service";
import { AddProducerService } from "../shared/services/add-producer.service";
import { MoviesService } from "../../shared/services/movies.service";

@Component({
  selector: "app-edit-movie",
  templateUrl: "./edit-movie.component.html",
  styleUrls: ["./edit-movie.component.scss"]
})
export class EditMovieComponent implements OnInit {
  movieId: Number;
  editMovie = new FormGroup({
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

  public movieInfo;

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorsService,
    private producerService: ProducersService,
    public addActorService: AddActorService,
    public addProducerService: AddProducerService,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.getMovieIdFromUrl();
    this.populateDefaultValueMovie();
    this.getProducers();
    this.getActors();
    this.observeFormValueChanges();
    this.findId();
  }
  populateDefaultValueMovie() {
    this.movieService.movies.subscribe(movies => {
      this.movieInfo = movies.filter(movie => {
        return movie.id == this.movieId;
      })[0];
      if (this.movieInfo) {
        this.editMovie.patchValue({
          name: this.movieInfo.name,
          release_year: this.movieInfo.release_year,
          poster: this.movieInfo.poster,
          producer: this.movieInfo.producerId,
          plot: this.movieInfo.plot,
          actors: this.movieInfo.actors.map(actor => actor.id)
        });
      }
    });
  }
  getMovieIdFromUrl() {
    this.movieId = this.route.snapshot.queryParams.id;
  }
  getActors() {
    this.actorService.actors.subscribe(actors => {
      this.actors = actors;
    });
  }

  formSubmit() {
    const {
      name,
      release_year,
      poster,
      producer,
      actors,
      plot
    } = this.editMovie.value;
    const actorsStr = actors.join(",");
    this.movieService
      .updateMovie(
        name,
        release_year,
        plot,
        poster,
        producer,
        actorsStr,
        this.movieId
      )
      .subscribe(result => {
        alert("Movie updated");
      });
  }

  getProducers() {
    this.producerSubscription = this.producerService.producers.subscribe(
      producers => {
        this.producers = producers;
      }
    );
  }

  observeFormValueChanges() {
    this.editMovie.valueChanges.subscribe(() => {
      this.findId();
    });
  }

  public findId() {
    const ids = this.editMovie.value.actors;
    const list = this.actors.filter(actor => ids.includes(actor.id));
    this.selectedActors = list;
  }
}
