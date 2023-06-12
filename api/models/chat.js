// api/models/chat.js
import { Schema, model } from "mongoose";

const chatSchema = new Schema({
    // Definir la estructura del esquema del chat, por ejemplo:
    user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

export const Chat = model("Chat", chatSchema);
