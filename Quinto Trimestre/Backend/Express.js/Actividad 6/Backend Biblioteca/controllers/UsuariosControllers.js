const conectar = require("../conexion/db")

class Usuarios{
    RegistrarUsuario = async(req,res)=>{
        const {nombre,correo,telefono,estado}=req.body
        let sql = "INSERT INTO usuarios (nombre,correo,telefono,estado) VALUES (?,?,?,?)"
        let resultado = await conectar.query(sql,
            [nombre,correo,telefono,estado])
            console.log(resultado)
            return res.json({"mensaje":"usuario registrado",
                "nombre":nombre,
                "estado": estado})
    }
    VerUsuario = async(req,res)=>{
        let resultado= await conectar.query(
            "SELECT * FROM usuarios")
            res.json({resultado})
    }

    EditarUsuario= async(req,res)=>{
        const {id,nombre,correo,telefono,estado}=req.body
        let resultado= await conectar.query(
            "UPDATE usuarios SET nombre=?,correo=?, telefono=?,estado=? WHERE id=?",[nombre,correo,telefono,estado,id])
            if(resultado === 0){
                return res.json({"mensaje":"no se pudo editar el usuario"})
            }
            res.json({"id": id,
                "mensaje": "usuario editado correctamente"})    
        }
        EliminarUsuario =async(req,res)=>{
            const {id}=req.body
            let resultado = await conectar.query(
                "DELETE FROM usuarios WHERE id=?",[id])
                if(resultado === 0){
                    return res.json({"mensaje":"el ususario no existe o ya fue eliminado"})
                }
                res.json({"mensaje":"usuario Eliminado correctamente"})  
    }
}

module.exports = Usuarios