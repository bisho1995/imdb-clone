// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  routes: {
    listMovies: "http://localhost:3000/list-movies",
    saveMovies: "http://localhost:3000/save-movie",
    updateMovie: "http://localhost:3000/update-movie",
    listActors: "http://localhost:3000/list-actors",
    addActor: "http://localhost:3000/add-actor",
    listProducers: "http://localhost:3000/list-producers",
    addProducer: "http://localhost:3000/add-producer"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
