import { Request } from 'express';
import { handleErrors } from './handlers/handleErrors';

export const stringifyRequest = (
    req: Request
): { method: string; params: string; query: string; body: string } => {
    const { method, params, query, body } = req;
    const requestProperties = {
        method,
        params,
        query,
        body,
    };

    const returnObject: any = {};
    Object.entries(requestProperties).map(([key, value]) => {
        const [success, error] = handleErrors(() => JSON.stringify(value));
        if (error) throw error;
        returnObject[key] = success || 'NA';
    });
    return returnObject;
};
