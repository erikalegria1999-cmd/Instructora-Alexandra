
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Usuario() {
    
    const [nombreProducto, setNombreProducto] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidadDisponible, setCantidadDisponible] = useState("");


    async function guardar() {
            let respuesta = await fetch("http://127.0.0.1:7070/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombreProducto: nombreProducto,
                    categoria: categoria,
                    precio: precio,
                    cantidadDisponible: cantidadDisponible
                })
            });
            
            let datos = await respuesta.json();
            alert(datos.mensaje);
    }
    const navegar = useNavigate()
    function llevarLogin(){
        navegar("/login")
    }

    return (
        <div>
            <nav>
                <button onClick={llevarLogin}>volver al login</button>
            </nav>
            <h1>Registre el producto</h1>

            <label>Nombre del producto </label>
            <input
                type="text"
                placeholder="Escriba el nombre del producto"
                value={nombreProducto}
                onChange={(e) => setNombreProducto(e.target.value)}
            />
            <br />

            <label>Categoría</label>
            <input
                type="text"
                placeholder="Categoría"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />
            <br />

            <label>Precio</label>
            <input
                type="texto"
                placeholder="Precio del producto $$$"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />
            <br />

            <label>Cantidad Disponible</label>
            <input
                type="text"
                placeholder="Cantidad disponible"
                value={cantidadDisponible}
                onChange={(e) => setCantidadDisponible(e.target.value)}
            />
            <br />
            
            <button onClick={guardar}>Aceptar</button>
        </div>
    );
}