import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';
import RequestError from '../utils/requestError';

export const errorHandler = (
    err: RequestError,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
): void => {
    console.log(chalk.red('Received below error: '));
    console.log({ err });
    res.status(err.statusCode || 500).send(err.message);
};
