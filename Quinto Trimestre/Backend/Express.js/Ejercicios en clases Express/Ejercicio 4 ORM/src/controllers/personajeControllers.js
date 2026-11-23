let Personajes = require("../models/personajesModels")

class PersonajeControllrs{
    guardarPersonaje =
    async(req,res)=>{
        let {nombre}=req.body
        let resultado = await Personajes.create({nombre})
        return res.json({
            mensaje: "personaje Registrado"
        })
}
    verPersonaje = async(req,res)=>{
        let respuesta = await Personajes.findAll()
        return res.json({
            "respuesta":respuesta
        })
    }
    buscarId = async(req,res)=>{
        const{id}=req.params
        let buscar = await Personajes.findByPk(id)
        return res.json({
            resultado : buscar
        })
    }
    actualizar = async(req,res)=>{
        const id=req.params.id
        const {nombre}=req.body
        let buscar = await Personajes.findByPk(id)
        if(buscar){
            await buscar.update({
                nombre})}
    }
    eliminar = async(req,res)=>{
        let id = req.params.id
        let buscar = await Personajes.findByPk(id)
        if (buscar){
            await buscar.destroy()
            return res.json({
                mensaje: "personaje eliminado"
            })
        }
    }
}
module.exports = PersonajeControllrs