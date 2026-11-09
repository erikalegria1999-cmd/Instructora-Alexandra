const ProductosController = require("../Controllers/ProductosController")
const express = require("express")
const rutaProductos = express.Router()
const nuevoProducto = new ProductosController()

rutaProductos.post("/productos", nuevoProducto.GuardarProductos)
rutaProductos.get("/productos", nuevoProducto.VerProductos)
rutaProductos.get("/productos/:id", nuevoProducto.ProductosId)
rutaProductos.delete("/productos/:id", nuevoProducto.EliminarProducto)
rutaProductos.get("/productos/agotados", nuevoProducto.ConsultaStock)
rutaProductos.get("/productos/bajo-stock",nuevoProducto.ConsultarMenor5)


module.exports = rutaProductos