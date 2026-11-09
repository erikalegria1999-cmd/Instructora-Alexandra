let UsuariosController = require("../controllers/UsuariosController")
let express = require("express")

let rutaUsuarios = express.Router()

const usuario = new UsuariosController()

rutaUsuarios.get("/usuarios", usuario.traer)
rutaUsuarios.post("/usuarios", usuario.guardar)

module.exports = rutaUsuarios