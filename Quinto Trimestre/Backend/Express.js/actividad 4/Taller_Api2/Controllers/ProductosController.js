const conexion = require("../conexion/db")

class ProductosController {
    VerProductos = (req, res) => {  
        conexion.query("SELECT * FROM productos", (error, resultados) => {
            if (error) {
                return res.json({ "Mensaje": "No Exiten Productos" })
            } else {
                return res.json(resultados)
            }
        })
    }

    GuardarProductos = (req, res) => {
        const { nombre, descripcion, precio, stock } = req.body
        if (precio <= 0) {
            return res.json({ "Error": "El valor no puede estar en 0 ni ser negativo" })
        }
        if (stock < 0) {
            return res.json({ "Error": "El stock no puede ser un valor negativo." })
        }
        const sql = "INSERT INTO productos(nombre, descripcion, precio, stock) VALUES(?, ?, ?, ?)"
        conexion.query(sql, [nombre, descripcion, precio, stock], (error) => {
            if (error) {
                return res.json({ "Mensaje": "Error: no se registro ningun producto" })
            } else {
                return res.json({ "Mensaje": "Productos Registrados exitosamente" })
            }
        })
    }

    ProductosId = (req, res) => {
        const { id } = req.body
        const sql = "SELECT * FROM productos WHERE id = ?"
        conexion.query(sql, [id], (error, resultados) => {
            if (error) {
                return res.json({ "Mensaje": "Error en el servidor" })
            }
            if (resultados.length === 0) {
                return res.json({"Mensaje":"No se encontro nada"})
            }
            return res.json(resultados[0])
        })
    }

    EliminarProducto = (req, res) => {
        const { id } = req.body
        const sql = "DELETE FROM productos WHERE id = ?"

        conexion.query(sql, [id], (error) => {
            if (error) {
                return res.json({ "Mensaje": "Error al intentar eliminar" })
            }
            return res.json({ "Mensaje": "Producto eliminado exitosamente" })
        })
    }

    ConsultaStock = (req, res) => {
        const sql = "SELECT * FROM productos WHERE stock = 0"

        conexion.query(sql, (error, resultados) => {
            if (error) {
                return res.json({ "Mensaje": "Error al consultar los productos" })
            }
            if (resultados.length === 0) {
                return res.json({ "Mensaje": "No hay productos con stock en cero" })
            }
            return res.json(resultados)
        })
    }

    ConsultarMenor5 = (req, res) => {
        const sql = "SELECT * FROM productos WHERE stock < 5"
        conexion.query(sql, (error, resultados) => {
            if (error) {
                return res.json({ "Mensaje": "Error al consultar los productos" })
            }
            if (resultados.length === 0) {
                return res.json({ "Mensaje": "No hay productos con stock menor a 5" })
            }
            return res.json(resultados)
        })
    } 

} 

module.exports = ProductosController