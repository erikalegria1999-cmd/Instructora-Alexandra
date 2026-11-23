const conectar = require("../conexion/db")

class Libros {
    registrarLibro = async (req, res) => {
        const { titulo, isbn, anio_publicacion, cantidad } = req.body
        let sql = "INSERT INTO libros (titulo, isbn, anio_publicacion, cantidad) VALUES (?,?,?,?)"

        let resultado = await conectar.query(sql, [titulo, isbn, anio_publicacion, cantidad])
        console.log(resultado)
        return res.json({
            "mensaje": "libro registrado",
            "nombre": titulo
        })
    }

    VerLibro = async (req, res) => {
        let resultado = await conectar.query("SELECT * FROM libros")
        res.json({ resultado })
    }

    EditarLibro = async (req, res) => {
        const { id, titulo, isbn, anio_publicacion, cantidad } = req.body
        let resultado = await conectar.query(
            "UPDATE libros SET titulo = ?, isbn = ?, anio_publicacion = ?, cantidad = ? WHERE id = ?",
            [titulo, isbn, anio_publicacion, cantidad, id]
        )
        if (resultado.affectedRows === 0) {
            return res.json({ "mensaje": "no se edito el libro" })
        }
        res.json({
            "id": id,
            "mensaje": "editado correctamente"
        })
    }

    EliminarLibro = async (req, res) => {
        const { id } = req.body
        let resultado = await conectar.query(
            "DELETE FROM libros WHERE id = ?",
            [id]
        )
        if (resultado.affectedRows === 0) {
            return res.json({ "mensaje": "el libro no existe o ya fue eliminado" })
        }
        res.json({ "mensaje": "el libro fue eliminado correctamente" })
    }
}

module.exports = Libros