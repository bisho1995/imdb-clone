import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { MoviesService } from "./movies.service";
import { ActorsService } from "./actors.service";
import { ProvidersService } from "./providers.service";

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [MoviesService, ActorsService, ProvidersService]
})
export class SharedModule {}
