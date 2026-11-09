import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

import Barra from "./Barra"
import Dashboard from "./Dashboard"
import Registro from "./Registro"
import Login from "./Login"
import Producto from "./Producto"
import Contacto from "./Contacto"
import Hola from "./Hola"
import Bienvenido from "./Bienvenido"

function App() {

    return (
        <BrowserRouter>
            <Barra></Barra>
            <Routes>
                <Route>
                    <Route path="/dash" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/registro" element={<Registro></Registro>}>
                    </Route>
                    <Route path="/login" element={<Login></Login> }>
                    </Route>
                    <Route path="/producto" element={<Producto></Producto>} 
                    ></Route>
                    <Route path="/contacto" element={<Contacto></Contacto>} 
                    ></Route>
                    <Route path= "/bienvenido" element={<Bienvenido></Bienvenido>}></Route>
                    <Route path= "/Hola" element={<Hola></Hola>}></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    )
    }

export default App
