import express from "express";
import User from "../models/user.js";


const router = express.Router();



// Ruta para obtener todos los usuarios
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
});

// Ruta para crear un nuevo usuario
router.post("/", async (req, res) => {
    const { name, email } = req.body;
    const newUser = new User({ name, email });

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: "Error al guardar el usuario" });
    }
});

export default router;

