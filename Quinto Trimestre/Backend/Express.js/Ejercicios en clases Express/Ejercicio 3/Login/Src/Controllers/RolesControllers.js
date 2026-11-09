const conectar = require("../Conexion/db")


class RolesControllers { 
    RegistrarRoles= async(req,res )=>{
        const {nombre,descripcion} = req.body
        let sql = "INSERT INTO roles (nombre,descripcion) VALUES (?,?)"

        let respuesta = await conectar.query(sql,[nombre,descripcion])

        console.log(respuesta)

        return res.json({
            "mensaje":"rol añadido",
            "nombre del rol": nombre,
        "descripcion del rol": descripcion})
    }
    VerRol = async (req,res)=>{
        let respuesta = await conectar.query("SELECT * FROM roles")
        res.json({respuesta})
    }

    EditarRol = async(req,res)=>{
        const {id} = req.body
        const { nombre , descripcion}= req.body

        let [respuesta]= await conectar.query("UPDATE  roles SET nombre = ?, descripcion= ? WHERE id = ? ", [nombre,descripcion, id])
        if(respuesta === 0){
            return res.json({"Mensaje": "Rol no encontrado"})
        }
        res.json({
            "id":id,
            "Mensaje": "Rol actualizado correctamente"}
            )
    }
    EliminarRol = async (req, res) => {
    const { id } = req.body

    let [respuesta] = await conectar.query(
        "DELETE FROM roles WHERE id = ?",
        [id]
    )    
    if (respuesta === 0) {
        return res.json({ "Mensaje": "El rol no existe o ya fue eliminado" })
    }

    res.json({ "Mensaje": "Rol eliminado correctamente" })
}

}

module.exports = RolesControllers