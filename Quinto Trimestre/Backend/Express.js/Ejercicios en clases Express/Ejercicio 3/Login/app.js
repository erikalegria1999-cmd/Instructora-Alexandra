const express = require ("express")
const cors = require("cors")
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const rutaAcceso = require("./Src/Routes/RouteAcceso")
const rutaRoles = require("./Src/Routes/RouteRoles")
const rutaUsuario = require("./Src/Routes/RouteUsuarios")

app.use("/",rutaAcceso)
app.use("/",rutaRoles)
app.use("/", rutaUsuario)




app.listen(PORT,()=>{
    console.log("Servidor En Funcionamiento Puerto:"+ PORT)
})