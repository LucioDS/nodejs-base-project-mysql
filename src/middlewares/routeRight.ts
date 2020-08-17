//dependencies
import { Request, Response, NextFunction, RequestHandler } from 'express';

//interfaces
import { Middleware } from '../interfaces/functions';

//constants
import { CONFIG_ROUTE_AUTH, CONFIG_ROUTE_AUTH_EXCEPTION } from '../constants/serviceConfig';

//queries
import { findRouteRight } from '../db/queries/routes ';

//utils
import { InternalServerError } from '../utils/buildResponse';

export const routeRight = (rightName: string): RequestHandler =>
    async (req: Request, res: Response, next: NextFunction): Middleware => {
        try {
            // Query route authentication
            const authenticationRequired = await findRouteRight(rightName);

            if (!authenticationRequired) {
                return InternalServerError(res, CONFIG_ROUTE_AUTH);
            }

            // Set up the authentication required for the authentication layer
            res.locals.right = authenticationRequired;

            return next();
        } catch (e) {
            return InternalServerError(res, CONFIG_ROUTE_AUTH_EXCEPTION);
        }
    };
