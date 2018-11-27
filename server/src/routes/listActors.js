import { listActors } from '../model/actors/index';

export default function (req, res) {
  listActors()
    .then((result) => {
      res.json({ status: 'success', result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: 'error' });
    });
}
