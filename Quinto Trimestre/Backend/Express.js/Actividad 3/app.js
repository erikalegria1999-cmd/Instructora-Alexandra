const express = require("express")
const cors =require("cors")
const app = express()
const mysql = require("mysql2")
const PORT = 7070

app.use(cors())
app.use(express.json())

const conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Santi09.",
    database: "actividad3",
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
app.post("/usuarios", (req, res) => {
    const { nombre, apellido, direccion, telefono } = req.body; 
        if(nombre && apellido && direccion && telefono)
    conectar.query(
        "INSERT INTO usuarios(nombre, apellido, Direccion, telefono) VALUES (?, ?, ?, ?)",
        [nombre, apellido, direccion, telefono],
        (error, resultado) => {
            if (error) {
                console.error("Error MySQL:", error.message);
                return res.json({ "mensaje": "Error: no se registro" });
            } else {
                return res.json({ "mensaje": "usuario registrado" });
            }
        }
    );
});

app.get("/usuarios", (req, res) => {
    conectar.query("SELECT * FROM usuarios", (error, resultados) => {
        if (error) {
            return res.json({ "mensaje": "error al traer datos de usuario" });
        } else {
            return res.json(resultados);
        }
    });
});

app.listen(PORT, () => {
    console.log("Servidor en funcionamiento en el puerto " + PORT);
});