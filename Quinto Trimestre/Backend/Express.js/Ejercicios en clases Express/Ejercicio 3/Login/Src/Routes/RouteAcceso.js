const RouteAcceso = require("../Controllers/AccesoControllers")
const express = require("express")
const rutaAcceso = express.Router()
const Acceso = new RouteAcceso()

rutaAcceso.post("/registrarse", Acceso.Registro)
rutaAcceso.post("/login",Acceso.Login)

module.exports = rutaAcceso