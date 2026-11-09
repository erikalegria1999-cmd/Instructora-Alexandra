let GuardarController = require("../controllers/GuardarController")
let express = require("express")
let rutaGuardar = express.Router()
let guardarC= new GuardarController()
rutaGuardar.post("/guardar",guardarC.guardar)

module.exports = rutaGuardar
