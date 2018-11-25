import { validationResult } from 'express-validator/check';
import { addActor } from '../model/actors/index';

// TODO: check to see if the same actor already exists. Same actor means
// actor with same name and dob as that is unlikely.

export default function (req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const {
      name, sex, dob, bio,
    } = req.body;
    addActor(name, sex, dob, bio)
      .then(() => {
        res.json({ status: 'success' });
      })
      .catch((err) => {
        console.log(err);
        res.status(200).json({ status: 'error' });
      });
  } else {
    console.log('There are errors', errors.array());
    res.status(500).json({
      status: 'error',
      message: 'Interal server error, we are looking into what happened',
    });
    res
      .status(400)
      .json({ status: 'error', message: 'Violated field validations' });
  }
}
