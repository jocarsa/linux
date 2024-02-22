const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
let aplicacion = express();
aplicacion.use(cors());

const url = "mongodb://localhost:27017";
const basededatos = "blog";
const cliente = new MongoClient(url);

aplicacion.get("/blog", async (req, res) => {
    await cliente.connect();
    const base = cliente.db(basededatos);
    
    const coleccion = base.collection('entradas');
    const entradas = await coleccion.find().toArray();
    console.log(entradas);
    res.send(entradas);
    await cliente.close();
});

aplicacion.listen(8080, () => {
    console.log("visita registrada");
});
