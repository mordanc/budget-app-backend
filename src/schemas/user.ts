import { Schema } from 'mongoose';

const BudgetHistory: Schema = new Schema({
    description: { type: String, required: true },
    amount: { type: Number, required: true },
});

export const BudgetSchema: Schema = new Schema({
    title: { type: String, required: true },
    maxBudget: { type: Number, required: true },
    history: [BudgetHistory],
});

export const UserSchema: Schema = new Schema({
    userId: { type: String, required: true },
    budgets: [BudgetSchema],
});
