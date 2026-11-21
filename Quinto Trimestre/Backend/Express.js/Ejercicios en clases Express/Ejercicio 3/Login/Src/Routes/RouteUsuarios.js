const UsuarioControllers = require("../Controllers/UsuarioControllers")
const express = require("express")
const rutaUsuarios = express.Router()
const Usuario = new UsuarioControllers()

rutaUsuarios.get("/verUsuario",Usuario.VerUsuarios)
rutaUsuarios.post("/actualizarUsuario",Usuario.ActualizarUsuario)
rutaUsuarios.delete("/Eliminar",Usuario.EliminarUsuario)
module.exports = rutaUsuarios