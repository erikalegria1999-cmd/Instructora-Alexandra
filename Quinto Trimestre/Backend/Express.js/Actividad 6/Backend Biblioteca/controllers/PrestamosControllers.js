const conectar = require("../conexion/db")

class Prestamos {

    RegistrarPrestamos = async (req, res) => {
        const { fecha_prestamo, fecha_devolucion, estado } = req.body
        let sql = "INSERT INTO prestamos (fecha_prestamo, fecha_devolucion, estado) VALUES (?,?,?)"

        let resultado = await conectar.query(sql, [
            fecha_prestamo,
            fecha_devolucion,
            estado
        ])
        console.log(resultado)
        return res.json({
            "mensaje": "prestamo Registrado",
            "fecha_prestamo": fecha_prestamo,
            "fecha_devolucion": fecha_devolucion,
            "estado": estado
        })
    }

    VerPrestamo = async (req, res) => {
        let resultado = await conectar.query("SELECT * FROM prestamos")
        res.json({ resultado })
    }

    EditarPrestamo = async (req, res) => {
        const { id, fecha_prestamo, fecha_devolucion, estado } = req.body
        let resultado = await conectar.query(
            "UPDATE prestamos SET fecha_prestamo=?, fecha_devolucion=?, estado=? WHERE id=?",
            [fecha_prestamo, fecha_devolucion, estado, id]
        )
        let filasAfectadas = resultado[0] ? resultado[0].affectedRows : resultado.affectedRows
        if (filasAfectadas === 0) {
            return res.json({ "mensaje": "no se puede editar" })
        }
        res.json({
            "id": id,
            "mensaje": "editado correctamente"
        })
    }

    EliminarPrestamo = async (req, res) => {
        const { id } = req.body
        let resultado = await conectar.query(
            "DELETE FROM prestamos WHERE id=?",
            [id]
        )
        let filasAfectadas = resultado[0] ? resultado[0].affectedRows : resultado.affectedRows
        if (filasAfectadas === 0) {
            return res.json({ "mensaje": "el prestamo no existe o ya fue eliminado" })
        }
        res.json({ "mensaje": "prestamo eliminado correctamente" })
    }
}

module.exports = Prestamos