import express from "express";
import bodyParser from "body-parser";
import logger from 'morgan';
import routes from './routes';

const app = express()

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(routes);

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
  });
  


export default app;