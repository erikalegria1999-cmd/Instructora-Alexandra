import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ActualizarAutores() {
    const [nombre, setNombre] = useState("")
    const [nacionalidad, setNacionalidad] = useState("")
    const [fechaNacimiento, setFechaNacimiento] = useState("")
    const navegar = useNavigate()

    async function guardarAutor() {
        let resultado = await fetch("http://127.0.0.1:5000/registrarAutor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                nacionalidad: nacionalidad,
                fecha_nacimiento: fechaNacimiento
            })
        })
        let datos = await resultado.json()
        console.log("datos ", datos)
        alert(datos.mensaje)
        navegar("/tablaAutores")
    }

    return (
        <div>
            <h1>Registro Autores</h1>
            <br />
            <label htmlFor="nombre">Nombre</label>
            <input
                id="nombre"
                type="text"
                placeholder="Gabriel García Márquez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <br />
            <label htmlFor="nacionalidad">Nacionalidad</label>
            <input
                id="nacionalidad"
                type="text"
                placeholder="Colombiana"
                value={nacionalidad}
                onChange={(e) => setNacionalidad(e.target.value)}
            />
            <br />
            <label htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
            <input
                id="fecha_nacimiento"
                type="date"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
            />
            <br />
            <button onClick={guardarAutor}>Registrar</button>
        </div>
    )
}