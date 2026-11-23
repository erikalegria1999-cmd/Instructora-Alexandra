const Prestmos = require("../controllers/PrestamosControllers")
const express = require("express")
const rutaPrestamos = express.Router()
const prestamos = new Prestmos()

rutaPrestamos.get("/verPrestamo",prestamos.VerPrestamo)
rutaPrestamos.post("/registrarPrestamo",prestamos.RegistrarPrestamos)
rutaPrestamos.put("/editarPrestamo", prestamos.EditarPrestamo)
rutaPrestamos.delete("/eliminarPrestamo",prestamos.EliminarPrestamo)




module.exports= rutaPrestamos