import {ExpressErrorMiddlewareInterface, HttpError, Middleware} from 'routing-controllers';
import {NextFunction, Request, Response} from 'express';

@Middleware({type: 'after'})
export default class GlobalErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {

    error(error: HttpError, request: Request, response: Response, next: NextFunction): void {
        console.error(error.message, error);
        response.status(error.httpCode).send({
            message: error.message
        });
        next();
    }
}
