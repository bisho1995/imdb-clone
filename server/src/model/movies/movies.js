import mysql from 'mysql';
import connection from '../db';

function addMovie(name, release_year, plot, poster, producer_id) {
  return new Promise((resolve, reject) => {
    const SQL =      'INSERT INTO movies(name, release_year, plot, poster, producer) VALUES(?,?,?,?,?)';
    const query = mysql.format(SQL, [
      name,
      release_year,
      plot,
      poster,
      producer_id,
    ]);

    connection.query(query, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

function getActors(id) {
  return new Promise((resolve, reject) => {
    const SQL =      'SELECT actors.name from movies INNER JOIN movie_actors on movies.id = movie_actors.movie_id INNER JOIN actors on movie_actors.actor_id = actors.id where movies.id = ?';
    const query = mysql.format(SQL, [id]);
    connection.query(query, (err, results) => {
      if (err) reject(err);
      else resolve(results.map(result => result.name));
    });
  });
}

function getMovieDetails(id) {
  return new Promise((resolve, reject) => {
    const SQL =      "SELECT movies.name as NAME,movies.release_year AS 'RELEASE YEAR', movies.poster AS POSTER, movies.plot AS PLOT, producers.name AS PRODUCER from movies INNER JOIN producers on movies.producer = producers.id WHERE movies.id=?";
    const query = mysql.format(SQL, [id]);

    connection.query(query, async (err, result) => {
      if (err) reject(err);
      else {
        try {
          const actors = await getActors(id);
          const details = result[0];
          details.actors = actors;
          resolve(details);
        } catch (er) {
          console.log(JSON.stringify(er));
          reject(er);
        }
      }
    });
  });
}

function getIds(limit = -1, offset = 0) {
  return new Promise((resolve, reject) => {
    const query =      limit === -1
        ? 'SELECT id from movies'
        : `SELECT id from movies LIMIT ${offset}, ${limit}`;
    connection.query(query, (err, results) => {
      if (err) reject(err);
      else resolve(results.map(result => result.id));
    });
  });
}

function updateMovie(id, name, release_year, plot, poster, producer, actors) {
  return new Promise((resolve, reject) => {
    const SQL =      'UPDATE movies set name = ?, release_year=?, plot=?, producer=?, poster=?  WHERE id = ?';
    const query = mysql.format(SQL, [
      name,
      release_year,
      plot,
      producer,
      poster,
      id,
    ]);
    connection.query(query, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}

export default undefined;
export {
 addMovie, getActors, getMovieDetails, getIds, updateMovie 
};
