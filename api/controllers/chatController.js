import Message from "../../models/message.js";
import User from "../../models/user.js";

// Obtener el chat
export async function getChat(req, res) {
    try {
        const messages = await Message.find().populate("sender").exec();
        res.render("chat", { messages });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al obtener los mensajes del chat");
    }
}

// Enviar un mensaje en el chat
export async function sendMessage(req, res) {
    const { sender, content } = req.body;

    try {
        const user = await User.findOne({ name: sender }).exec();

        if (!user) {
            const newUser = new User({ name: sender });
            await newUser.save();
        }

        const newMessage = new Message({ sender, content });
        await newMessage.save();

        res.redirect("/chat");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al enviar el mensaje");
    }
}
