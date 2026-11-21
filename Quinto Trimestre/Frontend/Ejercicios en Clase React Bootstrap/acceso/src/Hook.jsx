import { useEffect, useState } from "react"

export default function Hook(){
    const [contador, setContador]= useState(0)
    function Alerta(){
        alert("Contador Cambio")
    }
    useEffect(()=>{
        Alerta()
    },[contador])

    
    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={()=>setContador(contador+1)}> Incrementar</button>
            <br /> <br />
            <button onClick={()=>setContador(contador-1)}>Disminuir</button>
        </div>
    )
}