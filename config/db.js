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

export async function traerEdad(edad){
    try{
         const edadSchema = new db.Schema();
        const edadModel = db.models.Usuarios || db.model("Usuarios", edadSchema, "Usuarios")
        const rolFind = await edadModel.find({edad: edad})

        return{
            status: 200,
            response: {
                success: true,
                message: rolFind
            }
        }   

    }catch(e){
        return{
            status: 401,
            response: {
                success: false,
                message: e.message
            }
        }
    
    }
}