//dependencies
import { Request, Response } from 'express';

//utils
import { SuccessNoContent } from '../utils/buildResponse';

//interfaces
import { Handler } from '../interfaces/functions';

export const controllerSample = (req: Request, res: Response): Handler =>
    SuccessNoContent(res);
