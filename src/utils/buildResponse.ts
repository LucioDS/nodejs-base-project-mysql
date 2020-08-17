//dependencies
import { Response } from 'express';

/*/
    * Use this functions to respond to HTTP request with an specific status/message
    * NOTE: Respond functions are PascalCased
/*/

export const RespondWithStatusAndData = (res: Response, status: number, message: string | { message: string }): Response =>
    res.status(status).send(message);

// 2XX - Success responses

export const SuccessWithData = (res: Response, data: string): Response =>
    RespondWithStatusAndData(res, 200, data);

export const SuccessCreated = (res: Response, data: string): Response =>
    RespondWithStatusAndData(res, 201, data);

export const SuccessNoContent = (res: Response): Response =>
    res.sendStatus(204);

// 4XX - Client errors

export const BadRequest = (res: Response, message: string): Response =>
    RespondWithStatusAndData(res, 400, { message });

export const Unauthorized = (res: Response, message: string): Response =>
    RespondWithStatusAndData(res, 401, { message });

export const Forbidden = (res: Response, message: string): Response =>
    RespondWithStatusAndData(res, 403, { message });

export const NotFound = (res: Response, message: string): Response =>
    RespondWithStatusAndData(res, 404, { message });

// 5XX - Server errors

export const InternalServerError = (res: Response, message: string): Response =>
    RespondWithStatusAndData(res, 500, { message });

