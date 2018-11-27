import { listProducers } from '../model/producers/index';

export default function (req, res) {
  listProducers()
    .then((results) => {
      res.json({ Status: 'success', results });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: 'error' });
    });
}
