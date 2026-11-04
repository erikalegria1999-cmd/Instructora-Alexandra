import { useNavigate } from "react-router-dom"

export default function Registro(){
    const navegacion = useNavigate()
    function LlevarLogin(){
        navegacion("/logeo")
    }
    return(
        <div>
            <h1>Registrarse</h1>
            <label htmlFor="">Nombre Completo</label>
            <input type="text" placeholder="Escriba el nombre" />
            <label htmlFor="">contraseña</label>
            <input type="password" placeholder="Escriba contraseña" />
            <button onClick={LlevarLogin}>Registrarse</button>
        </div>
    )
}