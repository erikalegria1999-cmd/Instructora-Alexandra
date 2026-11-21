const Productos = require("../Controllers/Productos")
const express =require("express")
const rutaProductos = express.Router()
const producto = new Productos()


rutaProductos.get("/verProductos",producto.VerProductos)
rutaProductos.post("/ingresarProductos", producto.RegistrarProductos)
rutaProductos.put("/editarProductos", producto.EditarProductos)
rutaProductos.delete("/eliminarProductos",producto.EliminarProducto)

module.exports= rutaProductos