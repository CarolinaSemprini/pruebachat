import express from "express";
import User from "../models/user.js";


const router = express.Router();

// Obtener todos los usuarios
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json({ users });
    } catch (error) {
        console.log("Error al obtener los usuarios:", error);
        res.status(500).json({ error: "Error al obtener los usuarios" });
    }
});

// Crear un nuevo usuario
router.post("/", async (req, res) => {
    try {
        const { name } = req.body; // Cambio en la propiedad de req.body
        const newUser = new User({ name }); // Cambio en la propiedad de la variable
        await newUser.save();
        res.json({ message: "Usuario creado correctamente" });
    } catch (error) {
        console.log("Error al crear el usuario:", error);
        res.status(500).json({ error: "Error al crear el usuario" });
    }
});

// Eliminar un usuario
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        console.log("Error al eliminar el usuario:", error);
        res.status(500).json({ error: "Error al eliminar el usuario" });
    }
});

// Actualizar un usuario
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body; // Cambio en la propiedad de req.body
        await User.findByIdAndUpdate(id, { name }); // Cambio en la propiedad de req.body
        res.json({ message: "Usuario actualizado correctamente" });
    } catch (error) {


        console.log("Error al actualizar el usuario:", error);
        res.

            status(500).json({ error: "Error al actualizar el usuario" });
    }
});

export default router;
