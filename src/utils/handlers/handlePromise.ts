export const handlePromise = async (promise: any) => {
    let success;
    let error;

    try {
        success = await promise;
    } catch (err) {
        error = err;
    }
    return [success, error];
};
