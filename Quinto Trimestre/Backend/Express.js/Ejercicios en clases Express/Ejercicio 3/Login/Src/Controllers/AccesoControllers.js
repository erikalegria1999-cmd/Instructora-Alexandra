const conectar = require("../Conexion/db")
const bcrypt = require("bcrypt")

class AccesoControllers {
    Login = async (req, res) => {
        const {correo, password}= req.body
        
        let [respuesta] = await conectar.query("SELECT password FROM usuarios WHERE correo = ?",[correo]
        )
        console.log(respuesta)
        let validar = await bcrypt.compare(password,respuesta[0].password)
        if (validar){
                return res.json({"mensaje:":"logeo correctamente"})
        } else { return res.json({"Mensaje":"Contraseña incorrecta"})            
        }
    }

    Registro = async (req, res) => {
        const { nombre, apellido, direccion, telefono, correo, password } = req.body

        // 1. Encriptamos la contraseña con await
        const contrasena = await bcrypt.hash(password, 10)

        // 2. Insertamos en la base de datos usando .promise().query() con await
        let sql = "INSERT INTO usuarios (nombre, apellido, direccion, telefono, correo, password) VALUES (?, ?, ?, ?, ?, ?)"
        
        let respuesta = await conectar.query(sql, [nombre, apellido, direccion, telefono, correo, contrasena])

        // 3. Respondemos que todo salió bien
        console.log(respuesta)
        return res.json({
            "Mensaje": "Usuario Registrado Correctamente :D",
            "Usuario": {
                nombre: nombre,
                apellido: apellido
            }
        })
    }
}

module.exports = AccesoControllers