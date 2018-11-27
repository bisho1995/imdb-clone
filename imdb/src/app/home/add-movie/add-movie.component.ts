import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

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
  constructor() {}

  ngOnInit() {}
  formSubmit() {
    console.log(this.addForm);
  }
}
