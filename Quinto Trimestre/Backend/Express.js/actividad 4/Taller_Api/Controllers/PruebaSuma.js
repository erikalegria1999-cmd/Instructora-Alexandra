class PruebaSuma{
    Suma = (req,res)=>{
        const {numero1,numero2} = req.body
        const valor = Number(numero1) + Number(numero2)
        res.json({"Resultado:": valor })
    }

}

module.exports = PruebaSuma