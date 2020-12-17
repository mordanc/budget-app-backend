import { Request, Response, NextFunction } from 'express';

// TODO actually implement this
export const authenticateUser = (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.query;
    
    if (!token) {
        res.status(400).send('Token not included');
    }

    next();
};
