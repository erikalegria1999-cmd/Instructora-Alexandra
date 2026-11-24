import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ActualizarCategorias() {
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const navegar = useNavigate()

    async function guardarCategoria() {
        let resultado = await fetch("http://127.0.0.1:5000/registrarCategoria", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                descripcion: descripcion
            })
        })
        let datos = await resultado.json()
        console.log("datos ", datos)
        alert(datos.mensaje)
        navegar("/tablaCategorias")
    }

    return (
        <div>
            <h1>Registro Categorías</h1>
            <br />
            <label htmlFor="nombre">Nombre</label>
            <input
                id="nombre"
                type="text"
                placeholder="Novela"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <br />
            <label htmlFor="descripcion">Descripción</label>
            <input
                id="descripcion"
                type="text"
                placeholder="Libros de ficción y narrativa"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />
            <br />
            <button onClick={guardarCategoria}>Registrar</button>
        </div>
    )
}