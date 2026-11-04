
import { useState } from "react";

export default function Usuario() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");

    async function guardar(){
            let respuesta = await fetch("http://127.0.0.1:2000/usuarios",{
            
            method: "POST",
            headers: {
                "Content-Type" :"application/json"     
            },
            body : JSON.stringify({
                nombre: nombre,
                apellido:   apellido,
                direccion: direccion,
                telefono: telefono
            })
        })
        let  datos = await respuesta.json()
        alert(datos.mensaje)
    }

    return (
        <div>
        <h1>Registrarse</h1>

        <label>Nombre completo</label>
        <input
            type="text"
            placeholder="Escriba el nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
            <br />

        <label>Apellido completo</label>
        <input
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
        />
            <br />
        <label>Dirección</label>
        <input
            type="text"
            placeholder="Escriba la dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
        />
            <br />
        <label>Teléfono</label>
        <input
        type="tel"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        />
        <br />
        <button onClick={guardar}>Aceptar</button>
    </div>
    );
}
