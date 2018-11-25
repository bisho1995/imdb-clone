import { validationResult } from 'express-validator/check';
import { getMovieDetails } from '../model/movies/index';

// TODO: check if id of movies exist

function removeDuplicates(ar) {
  const seen = {};
  const arr = [];
  for (let i = 0; i < ar.length; i += 1) {
    const elem = ar[i];
    if (!seen[elem]) {
      seen[elem] = true;
      arr.push(elem);
    }
  }
  return arr;
}

export default async function (req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { id } = req.body;

    const idList = removeDuplicates(id.trim().split(','));
    const movies = new Array(idList.length);
    for (let i = 0; i < idList.length; i += 1) {
      movies[i] = getMovieDetails(idList[i]);
    }
    Promise.all(movies)
      .then(result => res.json(result))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ status: 'error' });
      });
  } else {
    res
      .status(400)
      .json({ status: 'error', message: 'Violated field validations' });
  }
}
