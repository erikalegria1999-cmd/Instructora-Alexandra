//primero importamos el browserrouter
import { BrowserRouter } from "react-router-dom"
//segundo importamos el routes
import { Routes } from "react-router-dom"
//tercero importamos el route
import { Route } from "react-router-dom"

//componentes
import Login from "./Login"
import Dasboard from "./Dashboard"
import Registro from "./Registro"
import Nav from "./Nav"
import Usuario from "./Usuario"
function App() {
    
  return (
    //utilizamo la primera etiqueta de importacion
<BrowserRouter>
    <Nav></Nav>
    {/* utilice la segunta etiqueta de importacion */}
    <Routes>
      {/*  por ultimo utilizamos la tercera etiqueta donde vamos a crear la ruta  */}
        <Route path="/" element={<Login></Login>}>
        </Route>
        //path sirve para
        <Route path="/logeo" element={<Login></Login>}>
        </Route>
        <Route path ="/registro" element={<Registro></Registro>}></Route>
        <Route path ="/dash" element={<Dasboard></Dasboard>}></Route>
        <Route path="/usuario" element={<Usuario></Usuario>}
        >

        </Route>
    </Routes>
</BrowserRouter>
  )
}

export default App
