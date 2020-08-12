import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import {router} from './routes';

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use;
app.use('/', router);

export default app;
