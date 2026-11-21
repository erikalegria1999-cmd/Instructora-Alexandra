const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const rutaProductos = require("./Routes/RoutesProductos")

app.use("/", rutaProductos)


app.listen(PORT,()=>{
    console.log("Servidor En Funcionamiento "+ PORT)
})