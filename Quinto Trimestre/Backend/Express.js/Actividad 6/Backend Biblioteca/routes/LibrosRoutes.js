const Libros = require("../controllers/LibrosControllers")
const express = require("express")
const rutaLibros = express.Router()
const libros = new Libros()

rutaLibros.get("/verLibro",libros.VerLibro)
rutaLibros.post("/registrarLibro",libros.registrarLibro)
rutaLibros.put("/editarLibro",libros.EditarLibro)
rutaLibros.delete("/eliminarLibro",libros.EliminarLibro)


module.exports= rutaLibros