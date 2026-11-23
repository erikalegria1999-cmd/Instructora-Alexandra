const Categorias = require("../controllers/CategoriaController")
const express = require("express")
const rutaCategorias = express.Router()
const categorias = new Categorias

rutaCategorias.get("/verCategoria",categorias.VerCategoria)
rutaCategorias.post("/registrarCategoria",categorias.RegistarCategoria)
rutaCategorias.put("/editarCategoria",categorias.EditarCategoria)
rutaCategorias.delete("/eliminarCategoria",categorias.EliminarCategoria)


module.exports = rutaCategorias