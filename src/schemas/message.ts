import { Schema, SchemaTypes } from 'mongoose';

export const messageSchema: Schema = new Schema({
    messageID: { type: Number, required: true },
    senderID: { type: SchemaTypes.ObjectId, required: true },
    senderFirstName: { type: String, required: true },
    senderLastName: { type: String, required: true },
    messageContents: { type: String, required: true }, //,
    // isImageMessage: {type: Boolean, required: true}
});
