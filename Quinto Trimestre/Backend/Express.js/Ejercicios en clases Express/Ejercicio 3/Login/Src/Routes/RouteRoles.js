const RouteRoles = require("../Controllers/RolesControllers")
const express = require("express")
const rutaRoles = express.Router()
const Roles = new RouteRoles()

rutaRoles.post("/registrar",Roles.RegistrarRoles)
rutaRoles.get("/buscar",Roles.VerRol)
rutaRoles.put("/actualizar",Roles.EditarRol)
rutaRoles.delete("/eliminar",Roles.EliminarRol)


module.exports = rutaRoles