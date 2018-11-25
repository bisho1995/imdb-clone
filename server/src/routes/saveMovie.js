import { validationResult } from 'express-validator/check';
import connection from '../model/db';
import { addMovie } from '../model/movies/index';
import { addActorsForMovie } from '../model/movie_actors/index';

/**
 * saves a movie and its actors into the database
 * @param {String} name Name of the movie
 * @param {Number} release_year The year in which the movie was released
 * @param {String} plot The plot of the movie
 * @param {String} poster Url of the poster of the image
 * @param {Number[]} actors The list of ids of the actors for the movie
 * @param {String} producer The id of the producer for the movies
 */
function addMovieToDb(name, release_year, plot, poster, producer, actors) {
  return new Promise((resolve, reject) => {
    connection.beginTransaction(async (err) => {
      if (err) {
        console.log(JSON.stringify(err));
        reject(err);
      } else {
        try {
          const result = await addMovie(
            name,
            release_year,
            plot,
            poster,
            producer,
          );
          await addActorsForMovie(result.insertId, actors);
          connection.commit();
          resolve(true);
        } catch (er) {
          connection.rollback((errRollback) => {
            if (errRollback) {
              console.log(`Error in rollback ${errRollback}`);
              reject(errRollback);
            } else {
              console.log(`Rollback as there was error ${er}`);
              reject(er);
            }
          });
        }
      }
    });
  });
}

export default function (req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const {
      name, release_year, plot, poster, producer,
    } = req.body;
    const actors = req.body.actors.trim().split(',');
    addMovieToDb(name, release_year, plot, poster, producer, actors)
      .then(() => {
        res.status(200).json({ status: 'success' });
      })
      .catch((err) => {
        res.status(200).json({ status: 'error', message: JSON.stringify(err) });
      });
  } else {
    console.log(errors.array());
    res
      .staus(400)
      .json({ status: 'error', message: 'Violated field validations' });
  }
}
