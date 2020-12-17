// from here, import all sub-routers from the other route folders(yet to be created)
// and export as a single router
import { Router } from 'express';

import { budgetRouter } from './v1/budgets';

export const router = Router();

router.use('/budgets', budgetRouter);
