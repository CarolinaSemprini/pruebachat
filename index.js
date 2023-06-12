import handlebars from "express-handlebars";
import express from "express";
import exphbs from "express-handlebars";
import { connectMongo } from "./config/db.js";
import chatRoutes from "./api/routes/chat.js";
import usersRoutes from "./api/routes/users.js";
import messagesRoutes from "./api/routes/messages.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();

// Conectar a la base de datos MongoDB
connectMongo();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración del motor de plantillas Handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

// Rutas de la API de chat
app.use("/api/chat", chatRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/messages", messagesRoutes);

// Otras rutas de la API
const apiRoutes = express.Router();
// Configura las rutas específicas para la API
// apiRoutes.get("/users", ...);
// apiRoutes.post("/messages", ...);
// ...
app.use("/api", apiRoutes);

// Página principal
app.get("/", (req, res) => {
    res.redirect("/api/chat");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
