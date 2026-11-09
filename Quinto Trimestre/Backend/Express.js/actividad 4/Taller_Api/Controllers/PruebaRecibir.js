class PruebaRecibir{
    recibir = (req,res)=>{
        const{nombre,edad}=req.body
        res.json({"Mensaje":"Datos recibidos"+" "+ "Nombre:" + nombre +" "+ "Edad:" + edad })
    }
}
module.exports = PruebaRecibir