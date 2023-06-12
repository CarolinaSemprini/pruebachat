// models/message.js

import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User", // Nombre del esquema de usuarios
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Message = model("Message", messageSchema);

export default Message;

