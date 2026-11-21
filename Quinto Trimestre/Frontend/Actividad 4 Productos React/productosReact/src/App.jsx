import {BrowserRouter,Routes, Route }from "react-router-dom"

import Productos from "./Productos"


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Productos></Productos> } ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
