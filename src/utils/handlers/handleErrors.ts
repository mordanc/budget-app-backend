import { ErrorResponse } from '../../types';

export const handleErrors = (func: Function): [any, ErrorResponse] => {
    let success;
    let error;

    try {
        success = func();
    } catch (err) {
        error = err;
    }
    return [success, error];
};
