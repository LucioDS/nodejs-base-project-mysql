// dependencies
import express, { json, Response } from 'express';
import cors from 'cors';

// routers
import monitoring from './src/routes/monitoring';

// environment variables
import config from './config';

const app = express();

// use format json
app.use(json());

// cors config
app.use(cors());

/*
 *declare all routers here
 */

// manage server status information
app.use('/monitoring', monitoring);

// catch all malformed urls
app.all('*', (_, res: Response) => res.sendStatus(404));

// listen to port settled in env variable
app.listen(config.RUNNING_PORT, () => console.log(`Listening in port ${config.RUNNING_PORT}`));
