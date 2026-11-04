import { useNavigate } from "react-router-dom"

export default function Login (){

    const navegar = useNavigate()
    function llevarDash(){
        navegar("/dash")
    
}

    return(
        <div>
            <button onClick={llevarDash}>volver Dashboart</button>
            <br /><br />
            <label> Correo</label>
            <input type="email"
            placeholder="Ejemplo@correo.com" />
            <br />
            <label> Contraseña</label>
            <input type="password"
            placeholder="*******" />

            <button onClick={llevarDash}> aceptar</button>
        </div>
    
    )
}