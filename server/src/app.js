import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import './model/db';

const app = express();
app.disable('x-powered-by');

app.use(
  logger('dev', {
    skip: () => app.get('env') === 'test',
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500).json({ error: true, message: err.message });
});

export default app;
