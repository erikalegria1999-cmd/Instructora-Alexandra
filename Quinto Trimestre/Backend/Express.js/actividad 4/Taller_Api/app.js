const express = require("express")
const cors = require("cors")
const app = express()
const mysql = require("mysql2")
const PORT = 3000

app.use(cors())
app.use(express.json())

const rutaBienvenido = require("./Routes/BienvenidoRoutes")
const rutaRecibir = require("./Routes/RecibirRoutes")
const rutaSuma =require("./Routes/SumaRoutes")
const rutaVerificar =require("./Routes/VerificarRoutes")
const rutaUsuario = require("./Routes/UsuarioRoutes")


app.use("/bienvenido",rutaBienvenido)
app.use("/recibir",rutaRecibir)
app.use("/suma",rutaSuma)
app.use("/verificar",rutaVerificar)
app.use("/usuario", rutaUsuario)



app.listen(PORT,()=>{
    console.log("Servidor en funcionamiento "+ "Puerto:"+ PORT )
})