import { check } from 'express-validator/check';
import { Router } from 'express';
import uploadPoster from './routes/uploadPoster';
import saveMovie from './routes/saveMovie';
import updateMovie from './routes/updateMovie';
import addActor from './routes/addActor';
import addActorForMovie from './routes/actorsForMovie';
import listMovies from './routes/listMovies';
import getMovieInfo from './routes/getMovieInfo';
import addProducer from './routes/addProducer';

const routes = Router();

routes.post('/upload-poster', uploadPoster);
routes.post(
  '/save-movie',
  [
    check('name')
      .exists()
      .isLength({ min: 2, max: 500 }),
    check('release_year')
      .exists()
      .isLength(4),
    check('plot')
      .exists()
      .isLength({ min: 2, max: 1000 }),
    check('producer')
      .exists()
      .isLength({ min: 1, max: 4 }),
    check('poster')
      .exists()
      .isLength({ max: 2000 }),
    check('actors'),
    check('actors')
      .exists()
      .isLength({ min: 1, max: 200 }),
  ],
  saveMovie,
);
routes.post('/update-movie', updateMovie);
routes.post(
  '/add-actor',
  [
    check('name')
      .exists()
      .isLength({ min: 3, max: 120 }),
    check('sex')
      .exists()
      .isLength(1),
    check('dob')
      .exists()
      .isLength({ max: 20 }),
    check('bio')
      .exists()
      .isLength({ min: 0, max: 5000 }),
  ],
  addActor,
);
routes.post(
  '/get-actors-for-movie',
  [
    check('id')
      .exists()
      .isLength({ min: 1, max: 4 }),
  ],
  addActorForMovie,
);
routes.post('/list-movies', listMovies);
routes.post(
  '/get-movie-info',
  [
    check('id')
      .exists()
      .isLength({ min: 1, max: 4 }),
  ],
  getMovieInfo,
);
routes.post(
  '/add-producer',
  [
    check('name')
      .exists()
      .isLength({ min: 3, max: 120 }),
    check('sex')
      .exists()
      .isLength(1),
    check('dob')
      .exists()
      .isLength({ max: 20 }),
    check('bio')
      .exists()
      .isLength({ min: 0, max: 5000 }),
  ],
  addProducer,
);

export default routes;
