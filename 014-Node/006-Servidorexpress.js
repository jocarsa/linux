const express = require("express");

let aplicacion = express();

aplicacion.get("/",(req,res) => {
    res.send("Yo soy la pagina de inicio");
})

aplicacion.listen(8080, () =>{
    console.log("visita registrada");
})