const Usuarios = require("../controllers/UsuariosControllers")
const express = require("express")
const rutaUsuarios = express.Router()
const usuarios = new Usuarios()

rutaUsuarios.get("/verUsuarios",usuarios.VerUsuario)
rutaUsuarios.post("/registrarUsuarios",usuarios.RegistrarUsuario)
rutaUsuarios.put("/editarUsuarios",usuarios.EditarUsuario)
rutaUsuarios.delete("/eliminarUsuarios",usuarios.EliminarUsuario)



module.exports = rutaUsuarios