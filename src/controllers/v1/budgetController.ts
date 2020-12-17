import { Request, Response, NextFunction } from 'express';
import { handlePromise } from '../../utils/handlers/handlePromise';
import { addBudget, deleteContact } from '../../services/mongo';

export const addBudgetController = async (req: Request, res: Response): Promise<void> => {
    const { budget, userId } = req.body;

    const [response, error] = await handlePromise(addBudget(userId, budget));

    if (error) res.status(500).send('Something went wrong');

    if (response) {
        res.send('Budget successfully added');
    }
};

export const deleteBudgetController = async (req: Request, res: Response): Promise<void> => {
    const { requestorID, targetID } = req.body;

    const [response, error] = await handlePromise(deleteContact(requestorID));

    if (error) res.status(500).send('Something went wrong');

    if (response) {
        res.send('Contact successfully deleted');
    }
};
