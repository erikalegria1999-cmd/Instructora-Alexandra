import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function ActualizarLibro (){
    const [titulo,setTitulo]= useState("")
    const[isbn,setIsbn]=useState("")
    const[anioPublicacion,setAnioPublicacion]=useState("")
    const [cantidad,setCantidad]=useState("")
    const navegar = useNavigate()
    
    async function guardarLibro(){
        let resultado = await fetch("http://127.0.0.1:5000/registrarLibro",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                titulo:titulo,
                isbn:isbn,
                anio_publicacion: anioPublicacion,
                cantidad: cantidad
            })
        })
        let datos = await resultado.json()
        console.log("datos ", datos)
        alert(datos.mensaje)
        navegar("/tablaLibros")
        
    }
    return(
            <div>
            <h1>Registrar Libro</h1>
            <br />
            <label htmlFor="titulo">Título</label>
            <input
                id="titulo"
                type="text"
                placeholder="Cien años de soledad"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <br />
            <label htmlFor="isbn">ISBN</label>
            <input
                id="isbn"
                type="text"
                placeholder="978-0307474728"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
            />
            <br />
            <label htmlFor="anio_publicacion">Año de Publicación</label>
            <input
                id="anio_publicacion"
                type="number"
                placeholder="1967"
                value={anioPublicacion}
                onChange={(e) => setAnioPublicacion(e.target.value)}
            />
            <br />
            <label htmlFor="cantidad">Cantidad</label>
            <input
                id="cantidad"
                type="number"
                placeholder="10"
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
            />
            <br />
            <button onClick={guardarLibro}>Registrar</button>
        </div>
    )

}