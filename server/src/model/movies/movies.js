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
    const SQL =      'SELECT actors.name as name, actors.id as id from movies INNER JOIN movie_actors on movies.id = movie_actors.movie_id INNER JOIN actors on movie_actors.actor_id = actors.id where movies.id = ?';
    const query = mysql.format(SQL, [id]);
    connection.query(query, (err, results) => {
      if (err) reject(err);
      else {
        resolve(results.map(result => ({ name: result.name, id: result.id })));
      }
    });
  });
}

function getMovieDetails(id) {
  return new Promise((resolve, reject) => {
    const SQL =      "SELECT movies.name as 'name',movies.release_year AS 'release_year', movies.poster AS 'poster', movies.plot AS 'plot', producers.name AS 'producer', producers.id AS producerId from movies INNER JOIN producers on movies.producer = producers.id WHERE movies.id=?";
    const query = mysql.format(SQL, [id]);

    connection.query(query, async (err, result) => {
      if (err) reject(err);
      else {
        try {
          const actors = await getActors(id);
          const details = result[0];
          details.actors = actors;
          details.id = id;
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

function updateMovie(id, name, release_year, plot, poster, producer) {
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
