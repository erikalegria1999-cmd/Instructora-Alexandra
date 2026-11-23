const Autores = require("../controllers/AutoresController")
const express =require("express")
const rutaAutores = express.Router()
const autores = new Autores

rutaAutores.get("/verAutores",autores.VerAutor)
rutaAutores.post("/registarAutores",autores.RegistrarAutores)
rutaAutores.put("/editarAutores",autores.EditarAutor)
rutaAutores.delete("/eliminarAutores",autores.EliminarAutor)

module.exports = rutaAutores