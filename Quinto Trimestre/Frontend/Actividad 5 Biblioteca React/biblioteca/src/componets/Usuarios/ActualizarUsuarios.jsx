import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ActualizarUsuarios(){
    const [nombre,setNombre]= useState("")
    const [correo,setCorreo] = useState("")
    const [telefono,setTelefono]=useState("")
    const [estado, setEstado] = useState("")
    const navegar = useNavigate()
async function guardarUsuario() {
    navegar("/tablaUsuarios")
    let resultado = await fetch("http://127.0.0.1:5000/registrarUsuarios",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            nombre:nombre,
            correo : correo,
            telefono : telefono,
            estado: estado
        })
    })
    let datos = await resultado.json()
    alert(datos.mensaje)
    
}
    return(
        <div>
            <h1>Registrar Usuario</h1>
            <br />
            <label htmlFor="nombre">Nombre</label>
            <input type="text"
            placeholder="pepe"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)} />
            <br />
            <label htmlFor="correo">Correo</label>
            <input type="email"
            placeholder="Ejemplo@gmail.com"
            value={correo}
            onChange={(e)=>setCorreo(e.target.value)} 
            />
            <br />
            <label htmlFor="telefono">Telefono</label>
            <input type="number" 
            placeholder="123456789"
            value={telefono}
            onChange={(e)=>setTelefono(e.target.value)}/>
            <br />
            <label htmlFor="estado">Estado</label>
            <input type="text"
            placeholder="Activo"
            value={estado}
            onChange={(e)=>setEstado(e.target.value)} />
            <br />
            <button onClick={guardarUsuario}>Registrar</button>
        </div>
    )
}