const conectar = require("../conexion/db")

class Autores {

    RegistrarAutores = async (req,res)=>{
        const { nombre,nacionalidad,fecha_nacimiento}=req.body
        let sql = "INSERT INTO autores (nombre,nacionalidad,fecha_nacimiento) VALUES (?,?,?)"
        let [resultado] = await conectar.query(sql,[nombre,
            nacionalidad,
            fecha_nacimiento
        ])
        console.log(resultado) 
        return res.json({
            "mensaje": "Autor añadido",
            "nombre": nombre,
            "nacionalidad": nacionalidad})
    }
    VerAutor =async (req,res)=>{
        let resultado = await conectar.query(
            "SELECT * FROM autores")
            res.json({resultado})
    }
    EditarAutor = async(req,res)=>{
        const {id,nombre,nacionalidad,fecha_nacimiento}=req.body
        let [resultado] =await conectar.query("UPDATE autores SET nombre=?, nacionalidad = ?, fecha_nacimiento=? WHERE id=?",[nombre,nacionalidad,fecha_nacimiento,id])
        if(resultado ===0){
            return res.json({"mensaje":"no se pudo editar"})
        }
        res.json({"id": id,
            "mensjae": "autor Editado correctamente"
        })
    }
    EliminarAutor = async(req,res)=>{
        const {id}=req.body
        let [resultado] = await conectar.query("DELETE FROM autores WHERE id =?",[id])
        if(resultado===0){
            return res.json({"mensaje":"el autor no existe o ya fue eliminado"})
        }
        res.json({"mensaje":"autor eliminado correctamente"})
    }}
module.exports = Autores