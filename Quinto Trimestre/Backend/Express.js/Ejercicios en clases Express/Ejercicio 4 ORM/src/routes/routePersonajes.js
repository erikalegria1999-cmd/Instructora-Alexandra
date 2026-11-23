const PersonajeControllrs = require("../controllers/personajeControllers")
const express = require("express")
const rutaPersonajes = express.Router()
const personajes = new PersonajeControllrs()


rutaPersonajes.post("/registrar",personajes.guardarPersonaje)
rutaPersonajes.get("/verPersonaje",personajes.verPersonaje)
rutaPersonajes.get("/buscar/:id",personajes.buscarId)
rutaPersonajes.put("/actualizar/:id", personajes.actualizar)
rutaPersonajes.delete("/eliminar/:id", personajes.eliminar)




module.exports = rutaPersonajes