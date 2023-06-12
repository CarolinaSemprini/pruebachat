import express from "express";
import { getChat, sendMessage } from "../controllers/chat.js";

const router = express.Router();

// Ruta para obtener el chat
router.get("/", getChat);

// Ruta para enviar un mensaje en el chat
router.post("/", sendMessage);

export default router;



