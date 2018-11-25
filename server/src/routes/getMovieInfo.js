import { validationResult } from 'express-validator/check';
import { getMovieDetails } from '../model/movies/index';

export default function (req, res) {
  const { id } = req.body;
  getMovieDetails(id)
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => {
      res.json({ err });
    });
}
