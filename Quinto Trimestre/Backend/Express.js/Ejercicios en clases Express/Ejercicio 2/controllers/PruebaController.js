class PruebaController{
    Pruebita= (req,res)=> {
        res.json({"mensaje":"esto es una prueba"})
    }
}
module.exports = PruebaController