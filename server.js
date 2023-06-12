// server.js
import express from "express";
import { connectMongo } from "./config/db";
import apiRoutes from "./api/routes";

// Inicializar la aplicación Express
const app = express();

// Conectar a la base de datos MongoDB
connectMongo();

// Configuración del motor de plantillas Handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Rutas de la API
app.use("/api", apiRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
