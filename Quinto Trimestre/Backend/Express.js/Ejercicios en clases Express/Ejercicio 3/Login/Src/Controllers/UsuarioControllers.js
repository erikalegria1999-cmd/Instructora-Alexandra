const conectar = require("../Conexion/db")
const bcrypt = require("bcrypt")

class UsuarioControllers {
    VerUsuarios = async (req,res)=>{
        
        let respuesta= await conectar.query("SELECT * FROM usuarios")
        res.json(respuesta)
}
    ActualizarUsuario = async (req,res)=>{
        const {id} = req.body
                const { nombre ,apellido,direccion,telefono,correo,password}= req.body
                    const contrasena = await bcrypt.hash(password, 10)
                let [respuesta]= await conectar.query("UPDATE  usuarios SET nombre = ?, apellido= ?,direccion=?, telefono=?,correo =?, password= ? WHERE id = ? ", [nombre,apellido,direccion,telefono,correo,contrasena, id])
                if(respuesta === 0){
                    return res.json({"Mensaje": "No se encontro el usuario"})
                }
                res.json({
                    "id":id,
                    "Mensaje": "Datos del usuario  actualizado correctamente"}
                    )
    }

    EliminarUsuario = async  (req,res)=>{
        const {id} = req.body
        let [respuesta] = await conectar.query("DELETE FROM usuarios WHERE id = ?", [id])
        if (respuesta === 0) {
                return res.json({ "Mensaje": "No se encontró el usuario para eliminar" })
            }

            res.json({
                "id": id,
                "Mensaje": "Usuario eliminado correctamente"
            })
    }

}

module.exports = UsuarioControllers