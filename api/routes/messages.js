// api/routes/messages.js

import express from "express";
import Message from "../models/message.js"

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
        const { text } = req.body; // Cambio en la propiedad de req.body
        const newMessage = new Message({ text }); // Cambio en la propiedad de la variable
        await newMessage.save();
        res.json({ message: "Mensaje enviado correctamente" });
    } catch (error) {
        console.log("Error al enviar el mensaje:", error);
        res.status(500).json({ error: "Error al enviar el mensaje" });
    }
});

// Eliminar un mensaje
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Message.findByIdAndDelete(id);
        res.json({ message: "Mensaje eliminado correctamente" });
    } catch (error) {
        console.log("Error al eliminar el mensaje:", error);
        res.status(500).json({ error: "Error al eliminar el mensaje" });
    }
});

// Actualizar un mensaje
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        await Message.findByIdAndUpdate(id, { text }); // Cambio en la propiedad de req.body
        res.json({ message: "Mensaje actualizado correctamente" });
    } catch (error) {
        console.log("Error al actualizar el mensaje:", error);
        res.status(500).json({ error: "Error al actualizar el mensaje" });
    }
});

export default router;