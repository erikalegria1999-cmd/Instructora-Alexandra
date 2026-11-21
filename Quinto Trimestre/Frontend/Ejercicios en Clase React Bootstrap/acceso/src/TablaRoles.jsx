import { useEffect, useState } from "react"

export default function TablaRoles (){
    const [rol, setRol] = useState([])

    async function traerDatos (){
        let respuesta = await fetch("http://127.0.0.1:3000/buscar")
        let datos = await respuesta.json()
        console.log("Datos Recibidos", datos.respuesta[0])       
        setRol(datos.respuesta[0])
    }   
    useEffect(()=>{
        traerDatos() 
    },[])

    return(
        <div>
            <h1> Gestión Roles</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Id Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {rol.map((item)=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.id_usuario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}