import db from "mongoose";
import dotenv from "dotenv";
import { response } from "express";

dotenv.config();

db.connect(process.env.bd)
    .then(() => console.log("conectado"))
    .catch(() => console.log("no conectado"));

export async function traerColleccion() {
    console.log("Traer colleccion");

    try {
        const userSchema = new db.Schema({
            nombre: String,
            apellido: String,
            edad: Number,
        });

        const userModel = db.model("Usuarios", userSchema, "Usuarios");
        userModel.init();

        const dataCollection = await userModel.find();

        return {
            status: 200,
            response: {
                message: "Conectado a la funcion",
                dataCollection,
            },
        };
    } catch (e) {
        return {
            status: 403,
            response: {
                message: "Error en la consulta"
            }
        }
    }
}
