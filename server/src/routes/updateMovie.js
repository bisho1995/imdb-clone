import { validationResult } from 'express-validator/check';
import { listActors } from '../model/movie_actors/index';

// find which elements are deleted in original array

// find new elements in the two arrays

export default function (req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const {
 name, release_year, plot, poster, producer, id 
} = req.body;
    const actors = req.body.actors.trim().split(',');
    listActors(id)
      .then((result) => {
        res.status(200).json({ status: 'success', result });
      })
      .catch((err) => {
        res.status(500).json({ status: 'error', message: JSON.stringify(err) });
      });
  } else {
    res
      .status(400)
      .json({ status: 'error', message: 'Violated field validations' });
  }
}
