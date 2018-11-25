import { validationResult } from 'express-validator/check';
import { listActors, deleteActor, addActor } from '../model/movie_actors/index';
import { updateMovie } from '../model/movies/index';

function findDeleted(ar1, ar2) {
  const deleted = {};
  for (let i = 0; i < ar1.length; i += 1) {
    const elem = ar1[i];
    deleted[elem] = true;
  }
  for (let i = 0; i < ar2.length; i += 1) {
    const elem = ar2[i];
    if (deleted[elem]) delete deleted[elem];
  }
  return Object.keys(deleted);
}

function findNew(ar1, ar2) {
  const deleted = {};
  for (let i = 0; i < ar2.length; i += 1) {
    const elem = ar2[i];
    deleted[elem] = true;
  }
  for (let i = 0; i < ar1.length; i += 1) {
    const elem = ar1[i];
    if (deleted[elem]) delete deleted[elem];
  }
  return Object.keys(deleted);
}

export default function (req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const {
      name, release_year, plot, poster, producer, id,
    } = req.body;
    const actors = req.body.actors.trim().split(',');
    listActors(id)
      .then(async (result) => {
        const deletedElems = findDeleted(result, actors);
        const newElems = findNew(result, actors);
        const promises = new Array(deletedElems.length + newElems.length + 1);
        let idx = 0;
        for (let i = 0; i < deletedElems.length; i += 1) {
          promises[idx] = deleteActor(id, deletedElems[i]);
          idx += 1;
        }
        for (let i = 0; i < newElems.length; i += 1) {
          promises[idx] = addActor(id, newElems[i]);
          idx += 1;
        }
        promises[idx] = updateMovie(
          id,
          name,
          release_year,
          plot,
          poster,
          producer,
        );

        Promise.all(promises)
          .then(() => {
            res.status(200).json({ status: 'success', result });
          })
          .catch((er) => {
            console.log(er);
            res.status(500).json({
              status: 'error',
              message: 'There was a problem serving your request',
            });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ status: 'error', message: err });
      });
  } else {
    res
      .status(400)
      .json({ status: 'error', message: 'Violated field validations' });
  }
}
