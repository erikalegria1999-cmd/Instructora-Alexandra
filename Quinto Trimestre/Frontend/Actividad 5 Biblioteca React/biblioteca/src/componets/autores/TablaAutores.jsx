import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function TablaAutores() {
    const [autores, setAutores] = useState([])
    const navegar = useNavigate()

    function irActualizar() {
        navegar("/actualizarAutor")
    }

    async function traerAutores() {
        let respuesta = await fetch("http://127.0.0.1:5000/verAutor")
        let datos = await respuesta.json()
        console.log("Datos de autores", datos.resultado?.[0])
        setAutores(datos.resultado?.[0] ?? [])
    }

    async function eliminarAutor(idborrar) {
        let respuesta = await fetch("http://127.0.0.1:5000/eliminarAutor", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: idborrar })
        })
        let resultado = await respuesta.json()
        console.log("Autor eliminado", resultado)
        alert(`Autor eliminado: ${resultado.mensaje ?? ""}`)
        traerAutores()
    }

    useEffect(() => {
        traerAutores()
    }, [])

    return (
        <div>
            <h1>Tabla de Autores</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>nacionalidad</th>
                        <th>fecha_nacimiento</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.map((a) => (
                        <tr key={a.id}>
                            <td>{a.id}</td>
                            <td>{a.nombre}</td>
                            <td>{a.nacionalidad}</td>
                            <td>{a.fecha_nacimiento}</td>
                            <td>
                                <button onClick={() => eliminarAutor(a.id)}>eliminar</button>
                                <button onClick={irActualizar}>editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}