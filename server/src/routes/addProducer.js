import { validationResult } from 'express-validator/check';
import { addProducer } from '../model/producers/index';

// TODO: check to see if the same producer already exists. Same producer means
// producer with same name and dob as that is unlikely.

export default function (req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const {
      name, sex, dob, bio,
    } = req.body;
    addProducer(name, sex, dob, bio)
      .then(() => {
        res
          .status(200)
          .json({ status: 'success', message: 'Added producer information' });
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        res.status(500).json({
          status: 'error',
          message: 'Sorry, there was a problem in adding producer information',
        });
      });
  } else {
    res
      .status(400)
      .json({ status: 'error', message: 'Violated field validations' });
  }
}
