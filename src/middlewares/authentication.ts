import { Request, Response, NextFunction } from 'express';


export const configAuthentication = (req: Request, res: Response, next: NextFunction) => {


    return next();
};
