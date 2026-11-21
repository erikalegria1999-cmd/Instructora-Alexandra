import { useEffect,useState } from "react";

export default function TablaUsuarios () {
        const [usuario , setUsuario] = useState([])
        async function traerUsuarios(){
            let respuesta = await fetch("http://127.0.0.1:3000/verUsuario")
            let datos = await respuesta.json()
            console.log("Datos Usuario", datos)
            setUsuario(datos[0])
        } 
        useEffect(()=>{
            traerUsuarios()
        },[])     
    return(
        <div>
            <h1>
                Usuarios Registrados
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th>Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuario.map((i)=>(
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.nombre}</td>
                                <td>{i.apellido}</td>
                                <td>{i.direccion}</td>
                                <td>{i.telefono}</td>
                                <td>{i.correo}</td>
                                <td>{i.password}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}