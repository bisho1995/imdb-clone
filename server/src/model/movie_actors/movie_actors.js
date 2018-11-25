import connection from '../db';

/**
 * Stores list of actor id for a particular movie id
 * @param {Number} movieId The id of the movie being considered
 * @param {Number[]} actors The list of actors associated with the movieId
 */
function addActorsForMovie(movieId, actors) {
  return new Promise((resolve, reject) => {
    const SQL = 'INSERT INTO movie_actors(movie_id, actor_id) VALUES ?';
    const values = new Array(actors.length);
    for (let i = 0; i < actors.length; i += 1) {
      values[i] = [movieId, actors[i]];
    }
    connection.query(SQL, [values], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

export default undefined;
export { addActorsForMovie };
