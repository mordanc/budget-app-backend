// maybe extract into separate folders if this gets too big

import { Document } from 'mongoose';

export type UserMessage = {
    userId: number;
    messageId: number;
    senderProfileId: number;
    text: string;
};

export type ErrorResponse = {
    id: number;
    description: string;
};

export interface UserDocument extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    contacts: Document;
    messages: any[];
}

export interface Contact extends Document {
    id: string;
    firstName: string;
    lastName: string;
    colorValue: string;
}

//TODO: Contacts and Messages types
