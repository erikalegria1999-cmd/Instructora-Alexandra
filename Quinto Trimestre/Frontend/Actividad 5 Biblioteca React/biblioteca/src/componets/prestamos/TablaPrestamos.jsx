import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function TablaPrestamos() {
    const [prestamo, setPrestamo] = useState([])
    const navegar = useNavigate()

    function irActualizar() {
        navegar("/actualizarPrestamo")
    }

    async function treaerPrestamo() {
        let respuesta = await fetch("http://127.0.0.1:5000/verPrestamo")
        let datos = await respuesta.json()
        console.log("Datos ", datos.resultado[0])
        setPrestamo(datos.resultado[0])
    }

    async function EliminarPrestamo(idborrar) {
        let respuesta = await fetch("http://127.0.0.1:5000/eliminarPrestamo", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: idborrar })
        })
        let resultado = await respuesta.json()
        console.log("prestamo eliminado")
        alert(`prestamo Eliminado: ${resultado.mensaje ?? ""}`)
        treaerPrestamo()
    }

    useEffect(() => {
        treaerPrestamo()
    }, [])

    return (
        <div>
            <h1>Tabla de Préstamos</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>fecha_prestamo</th>
                        <th>fecha_devolucion</th>
                        <th>estado</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {prestamo.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.fecha_prestamo}</td>
                            <td>{p.fecha_devolucion}</td>
                            <td>{p.estado}</td>
                            <td>
                                <button onClick={() => EliminarPrestamo(p.id)}>eliminar</button>
                                <button onClick={irActualizar}>editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}