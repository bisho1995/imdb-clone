import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EditMovieComponent } from "./edit-movie/edit-movie.component";
import { AddMovieComponent } from "./add-movie/add-movie.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "edit-movie", component: EditMovieComponent },
  {
    path: "add-movie",
    component: AddMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
