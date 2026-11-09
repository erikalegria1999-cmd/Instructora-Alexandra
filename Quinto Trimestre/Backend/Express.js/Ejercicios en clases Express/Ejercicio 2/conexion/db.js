let mysql = require("mysql2")

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

module.exports = conectar