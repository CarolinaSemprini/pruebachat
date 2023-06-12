import Message from "../models/message.js";

// Obtener el chat
export async function getChat(req, res) {
    try {
        // Obtener los mensajes del chat desde la base de datos
        const messages = await Message.find();
        res.json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los mensajes del chat" });
    }
}

// Enviar un mensaje en el chat
export async function sendMessage(req, res) {
    try {
        // Recibir el mensaje enviado por el cliente
        const { sender, content } = req.body;

        // Crear un nuevo mensaje en la base de datos
        const newMessage = new Message({ sender, content });
        await newMessage.save();

        res.status(201).json({ message: "Mensaje enviado exitosamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al enviar el mensaje" });
    }
}
