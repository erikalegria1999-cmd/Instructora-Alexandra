const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const productos = require("./Router/RutaProductos")

app.use("/",productos)


app.listen(PORT,()=>{
    console.log("Servidor en funcionamiento "+"Puerto "+ PORT)
})
