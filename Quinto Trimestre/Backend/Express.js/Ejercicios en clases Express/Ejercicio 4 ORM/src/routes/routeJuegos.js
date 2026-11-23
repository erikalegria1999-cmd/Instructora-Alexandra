const express = require("express")
const JuegoController = require("../controllers/juegosControllers")

const rutaJuego = express.Router()
const juegoController = new JuegoController()

rutaJuego.post("/registrar", juegoController.guardar)
rutaJuego.get("/verJuego",juegoController.verJuego)
rutaJuego.get("/buscar/:id",juegoController.buscarId)

rutaJuego.put("/actualizar/:id", juegoController.actualizar)
rutaJuego.delete("/eliminar/:id",juegoController.eliminar)

module.exports = rutaJuego