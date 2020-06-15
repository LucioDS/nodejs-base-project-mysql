// dependencies
import { Response, RequestHandler } from 'express';

// db
import connection from '../db/connection';

const healthz: RequestHandler = (_, res: Response) =>
	res.sendStatus(200);

const sqlcheck: RequestHandler = (_, res: Response) => {
	connection.ping();

	return res.sendStatus(200);
};

export default {
	healthz,
	sqlcheck,
};
