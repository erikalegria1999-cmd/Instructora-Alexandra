
let conectar = require("../conexion/db")

class UsuariosController {
    traer = (req,res)=>{
        conectar.query("SELECT * FROM usuario",(error,resultados)=>{
        if(error) {
            return res.json({"mensaje": "error al traer datos de usuario"})
        } else { return res.json(resultados)}
    })
    }
    guardar =(req,res)=>{
        const {nombre,apellido,direccion,telefono}= req.body
    conectar.query("INSERT INTO usuario(nombre,apellido,direccion,telefono) VALUES (?,?,?,?)",
        [nombre,apellido,direccion,telefono],(error)=>{
            if (error) {
                return res.json({"mensaje": "Error: no se registro"})
            } else {
                return res.json({"mensaje":"usuario registrado"})
            }
        } )
    }
}
module.exports =  UsuariosController



