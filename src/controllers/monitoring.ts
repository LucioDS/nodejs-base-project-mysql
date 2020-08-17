// dependencies
import { Response, RequestHandler } from 'express';

//interfaces
import { Handler } from '../interfaces/functions';

// db
import connection from '../db/connection';
import { SuccessNoContent } from '../utils/buildResponse';

const healthz: RequestHandler = (_, res: Response): Handler =>
	SuccessNoContent(res);

const sqlcheck: RequestHandler = (_, res: Response): Handler => {
	connection.ping();

	return SuccessNoContent(res);
};

export {
	healthz,
	sqlcheck,
};
