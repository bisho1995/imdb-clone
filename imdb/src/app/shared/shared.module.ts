import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { MoviesService } from "./services/movies.service";
import { ActorsService } from "./services/actors.service";
import { ProducersService } from "./services/producers.service";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [MoviesService, ActorsService, ProducersService]
})
export class SharedModule {}
