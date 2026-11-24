import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function TablaCategorias() {
    const [categorias, setCategorias] = useState([])
    const navegar = useNavigate()

    function irActualizar() {
        navegar("/actualizarCategoria")
    }

    async function traerCategorias() {
        let respuesta = await fetch("http://127.0.0.1:5000/verCategoria")
        let datos = await respuesta.json()
        console.log("Datos de categorias", datos.resultado?.[0])
        setCategorias(datos.resultado?.[0] ?? [])
    }

    async function eliminarCategoria(idborrar) {
        let respuesta = await fetch("http://127.0.0.1:5000/eliminarCategoria", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: idborrar })
        })
        let resultado = await respuesta.json()
        console.log("Categoría eliminada", resultado)
        alert(`Categoría eliminada: ${resultado.mensaje ?? ""}`)
        traerCategorias()
    }

    useEffect(() => {
        traerCategorias()
    }, [])

    return (
        <div>
            <h1>Tabla de Categorías</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>descripcion</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.nombre}</td>
                            <td>{c.descripcion}</td>
                            <td>
                                <button onClick={() => eliminarCategoria(c.id)}>eliminar</button>
                                <button onClick={irActualizar}>editar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}