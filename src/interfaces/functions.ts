//dependency interfaces
import { Response } from 'express';

// interface cb { (myArgument: string): void };

export type Middleware = Promise<void | Response>;
export type Handler = Response;
