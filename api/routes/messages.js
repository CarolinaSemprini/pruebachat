// api/routes/messages.js

import express from "express";
import Message from "../../models/message.js";

const router = express.Router();

// Obtener todos los mensajes
router.get("/", async (req, res) => {
    try {
        const messages = await Message.find();
        res.json({ messages });
    } catch (error) {
        console.log("Error al obtener los mensajes:", error);
        res.status(500).json({ error: "Error al obtener los mensajes" });
    }
});

// Crear un nuevo mensaje
router.post("/", async (req, res) => {
    try {
        const { message } = req.body;
        const newMessage = new Message({ text: message });
        await newMessage.save();
        res.json({ message: "Mensaje enviado correctamente" });
    } catch (error) {
        console.log("Error al enviar el mensaje:", error);
        res.status(500).json({ error: "Error al enviar el mensaje" });
    }
});

export default router;
