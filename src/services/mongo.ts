// api requests to mongo here.
import { handlePromise } from '../utils/handlers/handlePromise';
import mongoose, { Document, Model } from 'mongoose';
import { UserSchema, BudgetSchema } from '../schemas/user';

const UserModel = mongoose.model('users', UserSchema);
const BudgetModel = mongoose.model('budget', BudgetSchema);

// example:
export const getMessage = async (id: number) => {
    const [response, error] = await handlePromise({}); // replace with axios call

    if (error) throw error;
    return response;
};

export const addBudget = async (userId: any, budget: any) => {
    const updateUserBudget = () =>
        UserModel.updateOne(
            { userId },
            {
                $push: {
                    budgets: {
                        budget,
                    },
                },
            }
        );

    const [response, error] = await handlePromise(updateUserBudget());

    if (error) {
        console.log(`Add contact error: ${error}`);
        throw error;
    }
    console.log({ response });
    return response;
};

export const addContact = async (
    requestorID: string,
    targetID: string,
    targetFirstName: string,
    targetLastName: string
): Promise<Document> => {
    //Add contact to subdocument
    const [response, error] = await handlePromise(
        UserModel.updateOne(
            { _id: requestorID },
            {
                $push: {
                    contacts: {
                        _id: targetID,
                        firstName: targetFirstName,
                        lastName: targetLastName,
                        colorValue: '22,227,0',
                    },
                },
            }
        )
    );

    if (error) {
        console.log(`Add contact error: ${error}`);
        throw error;
    }
    return response;
};

export const deleteContact = async (contact: any) => {
    const [response, error] = await handlePromise({});

    if (error) throw error;
    return response;
};

export const createUser = async (userId: string): Promise<Document> => {
    const newUser = new UserModel({
        userId,
        budgets: [],
    });

    const [response, error] = await handlePromise(newUser.save());

    if (error) {
        console.log(`Create user error: ${error}`);
        throw error;
    }
    return response;
};

export const addMessageToUser = async (
    recipientID: string,
    senderID: string,
    senderFirstName: string,
    senderLastName: string,
    messageContents: string
): Promise<Document> => {
    const [response, error] = await handlePromise(
        UserModel.updateOne(
            { _id: recipientID },
            {
                $push: {
                    messages: {
                        senderID,
                        senderFirstName,
                        senderLastName,
                        messageContents,
                    },
                },
            }
        )
    );
    if (error) {
        console.log(`Create user error: ${error}`);
        throw error;
    }
    return response;
};
