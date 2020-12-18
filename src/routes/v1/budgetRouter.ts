import { Router } from 'express';
import { authenticateUser } from '../../middleware/authenticateUser';
import { addBudgetController, deleteBudgetController } from '../../controllers/v1/budgetController';

export const budgetRouter = Router();

budgetRouter.post('/addBudget/', authenticateUser, addBudgetController);
budgetRouter.delete('/deleteContact/', authenticateUser, deleteBudgetController);
