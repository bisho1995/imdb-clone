import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { ProducersService } from "../../../../shared/services/producers.service";
import { AddProducerService } from "../../services/add-producer.service";

@Component({
  selector: "app-add-producer",
  templateUrl: "./add-producer.component.html",
  styleUrls: ["./add-producer.component.css"]
})
export class AddProducerComponent implements OnInit {
  addProducer = new FormGroup({
    name: new FormControl(""),
    sex: new FormControl(""),
    dob: new FormControl(""),
    bio: new FormControl("")
  });
  constructor(
    private producerService: ProducersService,
    private addProducerService: AddProducerService
  ) {}

  ngOnInit() {}
  saveProducer() {
    this.producerService
      .addProducer(
        this.addProducer.value.name,
        this.addProducer.value.sex,
        this.addProducer.value.dob,
        this.addProducer.value.bio
      )
      .subscribe(result => {
        this.addProducer.reset();
      });
  }
  removeScreen() {
    this.addProducerService.hideAddProducer();
  }
}
