import { validationResult } from 'express-validator/check';
import { getMovieDetails } from '../model/movies/index';

export default function (req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { id } = req.body;
    getMovieDetails(id)
      .then((result) => {
        res.json({ result });
      })
      .catch((err) => {
        res.json({ err });
      });
  } else {
    res
      .status(400)
      .json({ status: 'error', message: 'Violated field validations' });
  }
}
