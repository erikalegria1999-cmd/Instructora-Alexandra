let PruebaBienvenida = require("../Controllers/PruebaBienvenido")
let express = require("express")
let rutaBienvenido = express.Router()
let Bienvenido = new PruebaBienvenida()

rutaBienvenido.get("/",Bienvenido.bienvenido)


module.exports = rutaBienvenido