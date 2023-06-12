import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    { collection: "users" } // Nombre de la colección en la base de datos
);

const User = mongoose.model("User", userSchema);

export default User;
