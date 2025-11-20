import { traerColleccion } from "./config/db.js";
import express from "express";
const port = 3000;

const api = express();

api.use(express.json());

api.post("/traerColeccion", async (req, res) => {
    const { status, response } = await traerColleccion();
    console.log("hola");
    res.status(status).send({
        response
    });
});

api.listen(port, () => {
    console.log("Está conectado a la url: http://localhost:" + port);
});
