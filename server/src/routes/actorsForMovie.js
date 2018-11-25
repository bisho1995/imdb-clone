import { validationResult } from 'express-validator/check';
import { getActors } from '../model/movies';

export default function (req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const { id } = req.body;
    getActors(id)
      .then((results) => {
        res.json({ status: 'success', result: results });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          status: 'error',
          message: 'Interal server error, we are looking into what happened',
        });
      });
  } else {
    console.log(errors.array());
    res
      .status(400)
      .json({ status: 'error', message: 'Violated field validations' });
  }
}
