let Juego = require ('../models/juegosModels')

class JuegoController{
    guardar=async (req, res)=>{
        let {nombre,precio}=req.body
        //funcion sequalize create
        let respuesta= await Juego.create({nombre,precio})
        return res.json({
            mensaje:"Juego registrado correctamente"
        })
    }
    verJuego = async (req,res) => {
        let respuesta = await Juego.findAll()
        return res.json({"respuesta":respuesta})
    }
    buscarId = async(req,res)=>{
        const {id}=req.params
        let busca = await Juego.findByPk(id)
        return res.json({
            respuesta : busca
        })
    }

    actualizar= async(req,res)=>{
        const id= req.params.id
        const {nombre,precio}=req.body
        let buscar = await Juego.findByPk(id)
        if (buscar){
            await buscar.update({
                nombre, precio
            })
            return res.json({"mensaje":"Elemento Actualizado",
            registro: buscar})}        
    }
    eliminar = async(req,res)=>{
        let id = req.params.id
        let buscar = await Juego.findByPk(id)
        if(buscar){
            await buscar.destroy()
            return res.json({
                mensaje: "elemento eliminado"
            })
        }
    }
}
module.exports=JuegoController