import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function TablaUsuarios(){
    const [usuario, setUsuario] = useState([])
    const navegar = useNavigate()

    function irActualizar(){
        navegar("/actualizarUsuarios")
    }

    async function traerUsuario(){
        let respuesta = await fetch("http://127.0.0.1:5000/verUsuarios")
        let datos = await respuesta.json()
        console.log("datos de usuario", datos.resultado[0])
        setUsuario(datos.resultado[0])
    }

    async function EliminarUsuario(idborrar) {
        let respuesta = await fetch("http://127.0.0.1:5000/eliminarUsuarios", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: idborrar })
        })
        let resultado = await respuesta.json()
        console.log("Usuario Eliminado", resultado)
        alert("Usuario Eliminado")
        traerUsuario()
    }

    useEffect(() => {
        traerUsuario()
    }, [])

    return(
        <div>
            <h1>Tabla de Usuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>correo</th>
                        <th>telefono</th>
                        <th>estado</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuario.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.nombre}</td>
                            <td>{u.correo}</td>
                            <td>{u.telefono}</td>
                            <td>{u.estado}</td>
                            <td>
                                <button onClick={() => EliminarUsuario(u.id)}>eliminar</button>
                                <button onClick={irActualizar}>editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}