import mongoose, { Schema, SchemaTypes } from 'mongoose';

export const contactSchema: Schema = new Schema(
    {
        _id: { type: SchemaTypes.ObjectId, required: true, unique: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        colorValue: { type: String, required: true },
    },
    { _id: false }
);

export const messageSchema: Schema = new Schema({
    messageID: { type: Number, required: true },
    senderID: { type: SchemaTypes.ObjectId, required: true },
    senderFirstName: { type: String, required: true },
    senderLastName: { type: String, required: true },
    messageContents: { type: String, required: true }, //,
    // isImageMessage: {type: Boolean, required: true}
});

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
