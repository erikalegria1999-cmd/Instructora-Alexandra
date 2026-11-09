let PruebaSuma = require("../Controllers/PruebaSuma")
let express = require("express")
let Suma = express.Router()
let SumaDatos = new PruebaSuma()

Suma.post("/",SumaDatos.Suma)

module.exports = Suma
