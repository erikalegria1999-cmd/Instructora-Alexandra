const mysql = require("mysql2")

const conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Santi09.",
    database: "productosTecnologicos",
    port: "3306"
})

conectar.connect((error)=>{
    if(error){
        console.log("Error en la conexion")
        console.log(error.message)
    } else {
        console.log("conexion Realizada")
    }
})

module.exports = conectar