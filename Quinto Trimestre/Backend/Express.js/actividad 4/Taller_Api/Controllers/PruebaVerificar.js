class PruebaVerifica {
    verificarEstado =(req,res)=>{
            res.json({
                "Mensaje ":"El Servidor esta Funcionando",
                "Estado ": "Activo"
            })
    }
}

module.exports = PruebaVerifica