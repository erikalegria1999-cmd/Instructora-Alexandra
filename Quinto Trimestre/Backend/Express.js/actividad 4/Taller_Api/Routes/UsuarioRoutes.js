let UsuarioGuardado = require("../Controllers/UsuariosController")
let express = require("express")
let rutaGuardar = express.Router()
let guardar = new UsuarioGuardado()

rutaGuardar.post("/", guardar.UsuarioGuardado)
rutaGuardar.get("/",guardar.UsuariosTraer)
rutaGuardar.get("/:id",guardar.ObtenerUsuarioId)
rutaGuardar.put("/:id", guardar.ActualizarUsuario)
rutaGuardar.delete("/:id", guardar.EliminarUsuario)

module.exports =  rutaGuardar