let mysql = require("mysql2")

let conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Santi09.",
    database: "biblioteca0",
    port: 3306
})

conectar.connect((error)=>{
    if(error){
        console.log("Error en la conexion")
        console.log(error.message)
    }else {
        console.log("Conexion Realizada")
    }
})

module.exports = conectar.promise()