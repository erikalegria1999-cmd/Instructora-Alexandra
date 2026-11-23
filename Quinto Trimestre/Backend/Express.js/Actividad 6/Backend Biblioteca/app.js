const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5000
app.use(cors())
app.use(express.json())

const rutaAutores = require("./routes/AutoresRoutes")
const rutaCategorias = require("./routes/CategoriaRoutes")
const rutaLibros = require("./routes/LibrosRoutes")
const rutaPrestamos = require("./routes/PrestamosRoutes")
const rutaUsuario = require("./routes/UsuariosRotes")

app.use("/", rutaAutores)
app.use("/",rutaCategorias)
app.use("/",rutaLibros)
app.use("/",rutaPrestamos)
app.use("/",rutaUsuario)


app.listen(PORT,()=>{
    console.log("Servidor en Funcionamiento "+ PORT)
})