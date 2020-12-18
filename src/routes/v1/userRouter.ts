import { Router } from 'express';
import { authenticateUser } from '../../middleware/authenticateUser';
import { createNewUser } from '../../controllers/v1/userController';

export const userRouter = Router();

userRouter.post('/createUser/', createNewUser);
