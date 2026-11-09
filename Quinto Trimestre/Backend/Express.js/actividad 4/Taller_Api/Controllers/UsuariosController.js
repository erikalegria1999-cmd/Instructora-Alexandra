let ListaUsuarios = []
class UsuariosController{
    UsuarioGuardado = (req,res)=>{
        const {nombre,apellido,direccion,telefono} = req.body
        const nuevoUsuario ={
            id: ListaUsuarios.length +1,
            nombre : nombre,
            apellido : apellido,
            direccion: direccion,
            telefono: telefono
        }
        ListaUsuarios.push(nuevoUsuario)
        res.json({"Mensaje":"Usuario Registrado", "Bienvenido":`${nombre} ${apellido}`})
    }
    UsuariosTraer=(req,res)=>{
        res.json({
            "Mensaje":"Usuario registrado", "Usuario": ListaUsuarios
        })
    }
    ObtenerUsuarioId = (req, res) => {
        const { id } = req.body
        let usuarioEncontrado = null

        for (let i = 0; i < ListaUsuarios.length; i++) {
            if (Number(ListaUsuarios[i].id) === Number(id)) {
                usuarioEncontrado = ListaUsuarios[i]
                break
            }
        }
        if (!usuarioEncontrado) {
            res.json({ "Mensaje": "Usuario no encontrado" })
        } else {
            res.json({ "Usuario": usuarioEncontrado })
        }
    }
    ActualizarUsuario = (req, res) => {
        const { id, nombre, apellido, direccion, telefono } = req.body
        let usuarioEncontrado = null

        for (let i = 0; i < ListaUsuarios.length; i++) {
            if (Number(ListaUsuarios[i].id) === Number(id)) {
                ListaUsuarios[i].nombre = nombre
                ListaUsuarios[i].apellido = apellido
                ListaUsuarios[i].direccion = direccion
                ListaUsuarios[i].telefono = telefono
                usuarioEncontrado = ListaUsuarios[i]
                break
            }
        }
        if (!usuarioEncontrado) {
            res.json({ "Mensaje": "Usuario no encontrado para actualizar" })
        } else {
            res.json({ 
                "Mensaje": "Usuario actualizado con éxito", 
                "Usuario": usuarioEncontrado 
            })
        }
    }
    EliminarUsuario = (req, res) => {
        const { id } = req.body
        let nuevoArreglo = []
        let encontrado = false

        for (let i = 0; i < ListaUsuarios.length; i++) {
            if (Number(ListaUsuarios[i].id) === Number(id)) {
                encontrado = true
            } else {
                nuevoArreglo.push(ListaUsuarios[i])
            }
        }
        ListaUsuarios = nuevoArreglo
        if (!encontrado) {
            res.json({ "Mensaje": "Usuario no encontrado para eliminar" })
        } else {
            res.json({ "Mensaje": "Usuario eliminado con éxito" })
        }
    }   
}
    module.exports = UsuariosController