
// importar libreria
import { BrowserRouter, Routes, Route} from "react-router-dom"

// importar Modulos
import Efecto from "./Efecto"
import Hook from "./Hook"
import TablaRoles from "./TablaRoles"
import TablaUsuarios from "./TablaUsuarios"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/efecto" element={<Efecto></Efecto>}>
        </Route>
        <Route path="/hook"element={<Hook></Hook>} ></Route>
        <Route path="/tablaRoles" element={<TablaRoles></TablaRoles>}></Route>
        <Route path="/tablaUsuarios" element={<TablaUsuarios></TablaUsuarios>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
