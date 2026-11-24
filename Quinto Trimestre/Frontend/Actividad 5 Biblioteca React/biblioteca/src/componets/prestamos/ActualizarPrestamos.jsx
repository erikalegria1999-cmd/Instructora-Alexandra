import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ActualizarPrestamos() {
    const [fechaPrestamo, setFechaPrestamo] = useState("")
    const [fechaDevolucion, setFechaDevolucion] = useState("")
    const [estado, setEstado] = useState("")
    const navegar = useNavigate()

    async function guardarPrestamo() {
        let resultado = await fetch("http://127.0.0.1:5000/registrarPrestamo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fecha_prestamo: fechaPrestamo,
                fecha_devolucion: fechaDevolucion,
                estado: estado
            })
        })
        let datos = await resultado.json()
        alert(datos.mensaje)
        navegar("/tablaPrestamo")
    }

    return (
        <div>
            <h1>Registro Prestamos</h1>
            <br />
            <label htmlFor="fecha_prestamo">fecha de Prestamo</label>
            <input
                id="fecha_prestamo"
                type="date"
                value={fechaPrestamo}
                onChange={(e) => setFechaPrestamo(e.target.value)}
            />
            <br />
            <label htmlFor="fecha_devolucion">Fecha Devolucion</label>
            <input
                id="fecha_devolucion"
                type="date"
                value={fechaDevolucion}
                onChange={(e) => setFechaDevolucion(e.target.value)}
            />
            <br />
            <label htmlFor="estado">Estado</label>
            <input
                id="estado"
                type="text"
                placeholder="Activo"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
            />
            <br />
            <button onClick={guardarPrestamo}>Registrar</button>
        </div>
    )
}