// config/db.js
import mongoose from "mongoose";

export async function connectMongo() {
    const user = 'admin';
    const password = 'admin';
    const database = 'ecommerce';
    const uri = `mongodb+srv://${user}:${password}@ecommerce.wjlqeps.mongodb.net/${database}?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Conexión exitosa a la base de datos MongoDB");
    } catch (error) {
        console.error("Error al conectar a la base de datos MongoDB:", error);
        throw "No se pudo conectar a la base de datos";
    }
}

