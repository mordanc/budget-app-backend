import { Request, Response, NextFunction } from 'express';

import { logger } from '../utils/logger';
import { handleErrors } from '../utils/handlers/handleErrors';
import { stringifyRequest } from '../utils/stringifyRequeset';

export const routeLogger = (req: Request, res: Response, next: NextFunction): void => {
    const [success, error] = handleErrors(() => stringifyRequest(req));

    if (error) next(error);

    const { method, params, query, body } = success || {};

    logger.blue(
        `Received request with method: ${method} params: ${params} query: ${query} body: ${body}`
    );
    next();
};
