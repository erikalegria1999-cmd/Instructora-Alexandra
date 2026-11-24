import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function TablaLibros() {
    const [libros, setLibros] = useState([])
    const navegar = useNavigate()

    function irActualizar() {
        navegar("/actualizarLibro")
    }

    async function traerLibros() {
        let respuesta = await fetch("http://127.0.0.1:5000/verLibro")
        let datos = await respuesta.json()
        console.log("Datos de libros", datos.resultado?.[0])
        setLibros(datos.resultado?.[0] ?? [])
    }

    async function eliminarLibro(idborrar) {
        let respuesta = await fetch("http://127.0.0.1:5000/eliminarLibro", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: idborrar })
        })
        let resultado = await respuesta.json()
        console.log("Libro eliminado", resultado)
        alert(`Libro eliminado: ${resultado.mensaje ?? ""}`)
        traerLibros()
    }

    useEffect(() => {
        traerLibros()
    }, [])

    return (
        <div>
            <h1>Tabla de Libros</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>titulo</th>
                        <th>isbn</th>
                        <th>anio_publicacion</th>
                        <th>cantidad</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map((l) => (
                        <tr key={l.id}>
                            <td>{l.id}</td>
                            <td>{l.titulo}</td>
                            <td>{l.isbn}</td>
                            <td>{l.anio_publicacion}</td>
                            <td>{l.cantidad}</td>
                            <td>
                                <button onClick={() => eliminarLibro(l.id)}>eliminar</button>
                                <button onClick={irActualizar}>editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}