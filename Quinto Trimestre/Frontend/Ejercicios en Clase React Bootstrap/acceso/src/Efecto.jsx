import { useEffect } from "react"


export default function Efecto (){
    useEffect(()=>{
        alert("El Componente Se ha Cargado")
    },[])

    return(
        <div>
            <h1> Hook UseEffect</h1>
        </div>
    )
}