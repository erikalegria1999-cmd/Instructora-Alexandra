class PruebaBienvenido {
    bienvenido =(req,res)=>{
        res.json({"Mensaje":"Bienvenido"})
    }
}

module.exports = PruebaBienvenido