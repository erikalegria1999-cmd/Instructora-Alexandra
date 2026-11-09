
class GuardarController {
    guardar = (req,res) =>{ 
        const {nombre,edad} = req.body
        res.json({"mensaje":"Datos Recibidos"+ nombre + ""+ edad })
    }
}
module.exports = GuardarController