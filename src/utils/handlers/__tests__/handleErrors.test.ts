import { handleErrors } from '../handleErrors';

describe('handleErrors', () => {
    it('should assign return an error when the function argument throws an error', () => {
        const expectedError = new Error('Expected test error');
        const throwErr = () => {
            throw expectedError;
        };

        const [response, error] = handleErrors(() => throwErr());

        expect(error).toEqual(expectedError);
    });

    it('should return success when the function argument runs successfully', () => {
        const data = 'test data';
        const successFunction = () => data;

        const [response, error] = handleErrors(() => successFunction());

        expect(response).toEqual(data);
    });
});
