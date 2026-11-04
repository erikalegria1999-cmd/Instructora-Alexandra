import { useNavigate } from "react-router-dom"


export default function Login (){
    const navegacion = useNavigate()
    function LlevarDash(){
        navegacion("/dash")
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <label htmlFor="">Correo</label>
            <input type="text"
            placeholder="Escriba el Correo" />
            <label htmlFor="">Contraseña</label>
            <input type="password"
            placeholder="Escriba la Contraseña" />
            <button onClick={LlevarDash}>Aceptar</button>
        </div>
    )
}