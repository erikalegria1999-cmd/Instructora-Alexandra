let PruebaEstado = require("../Controllers/PruebaVerificar")
let express = require("express")
let estado = express.Router()
let estadoC = new PruebaEstado()

estado.get("/",estadoC.verificarEstado)

module.exports = estado