const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
const app = express()
const PORT = 2000

app.use(cors())
app.use(express.json())

// conexion a Base Datos
const conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Santi09.",
    database: "Ejemplo",
    port: 3306
})

conectar.connect((error)=>{
    if(error){
        console.log("error en la conexion")
        console.log(error.message)
    } else {
        console.log("conexion realizada")
    }
})
app.get("/prueba",(req,res)=>{
    res.json({"Mensjae:": "Esto es una prueba"})
})
app.post("/guardar",(req,res)=>{
    const {nombre, edad} = req.body
    res.json({"mensaje": "Datos Recibidos: " + nombre + " " + edad})
})
app.post("/usuarios",(req,res)=>{
    const {nombre,apellido,direccion,telefono}= req.body
    conectar.query("INSERT INTO usuario(nombre,apellido,direccion,telefono) VALUES (?,?,?,?)", // necesito explicar esto 
        [nombre,apellido,direccion,telefono],(error,resultado)=>{
            if (error) {
                return res.json({"mensaje": "Error: no se registro"})
            } else {
                return res.json({"mensaje":"usuario registrado"})
            }
        } )
})
app.get("/usuarios",(req,res)=>{
    conectar.query("SELECT * FROM usuario",(error,resultados)=>{
        if(error) {
            return res.json({"mensaje": "error al traer datos de usuario"})
        } else { return res.json(resultados)}
    })

})


app.listen(PORT,()=>{
    console.log("servidor en ejecucion"+" "+ PORT)
})