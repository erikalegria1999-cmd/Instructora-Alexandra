let PruebaRecibir = require("../Controllers/PruebaRecibir")
let express = require("express")
let  recibir = express.Router()
let recibirDatos = new PruebaRecibir()

recibir.post("/",recibirDatos.recibir)

module.exports = recibir
