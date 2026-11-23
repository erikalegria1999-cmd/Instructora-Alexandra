const conectar = require("../conexion/db")


class Categorias {
    RegistarCategoria = async(req,res)=>{
        const { nombre, descripcion } = req.body
        let sql = "INSERT INTO categorias (nombre, descripcion) VALUES (?,?)"
        let [resultado] = await conectar.query(sql,[nombre, descripcion])
        console.log(resultado)
        return res.json({"mensaje":"categoria Añadida",
            "nombre":nombre})
    } 
    VerCategoria = async (req,res)=>{
        let resultado =await conectar.query
        ("SELECT * FROM categorias" )
        res.json({resultado})
    }
    EditarCategoria = async (req,res)=>{
        const {id, nombre, descripcion}=req.body
        let [resultado]= await conectar.query(
            "UPDATE categorias SET  nombre =?,  descripcion=? WHERE id = ?",[ nombre, descripcion,id])
            if (resultado ===0){
                return res.json({"mensaje":"no se pudo editar"})
            } res.json({"id":id,
                "mensaje":"Editado correctamente"
            })
    }
    EliminarCategoria = async (req,res)=>{
        const {id}= req.body
        let [resultado] = await conectar.query(
            "DELETE FROM categorias WHERE  id =? ", [id]
        ) 
        if(resultado===0){
            return res.json({"mensaje":"la categoria no existe o ya fue eliminada"})
        }
        res.json({"mensaje":"caegoria Registrada correctamente"})
    }
}
module.exports = Categorias