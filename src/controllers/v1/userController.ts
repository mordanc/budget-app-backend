import { Request, Response } from 'express';
import { handlePromise } from '../../utils/handlers/handlePromise';
import { createUser } from '../../services/mongo';
import mongoose, { Schema } from 'mongoose';
import { UserSchema } from '../../schemas/user';

export const createNewUser = async (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    // generate user's Friend code
    let friendCode;
    do {
        friendCode = generateFriendCode();
    } while (await checkDB(friendCode));

    const [response, error] = await handlePromise(createUser(firstName));

    if (error) {
        if (error.code === 11000 || error.code === 11001) {
            res.status(500).send('An account with that email already exists');
        }
        res.status(500).send('Something went wrong creating the user');
    }

    if (response) {
        console.log(`User creation repsonse ${response}`);
        res.send('User successfully Created');
    }
};

/**
 * Generate 8 digit friend code
 */
const generateFriendCode = () => {
    return Math.floor(Math.random() * 90000000) + 10000000;
};

/**
 * Check the DB for existing Friend Code number
 * @param code the code we're checking for
 */
const checkDB = async (code: number) => {
    const search = mongoose.model('users', UserSchema);
    const idFound = await search.findOne({ friendCode: code });
    return idFound;
};
