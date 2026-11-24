import { BrowserRouter, Routes, Route } from "react-router-dom"

import ActualizarUsuarios from "./componets/Usuarios/ActualizarUsuarios"
import TablaUsuarios from "./componets/Usuarios/TablaUsuarios"

import ActualizarPrestamo from "./componets/prestamos/ActualizarPrestamos"
import TablaPrestamos from "./componets/prestamos/TablaPrestamos"

import ActualizarLibro from "./componets/libros/ActualizarLibro"
import TablaLibros from "./componets/libros/TablaLibros"

import ActualizarCategorias from "./componets/categorias/ActualizarCategorias"
import TablaCategorias from "./componets/categorias/TablaCategorias"

import ActualizarAutores from "./componets/autores/ActualizarAutores"
import TablaAutores from "./componets/autores/TablaAutores"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas de Usuario */}
        <Route path="/registrarUsuario" element={<ActualizarUsuarios />} />
        <Route path="/tablaUsuarios" element={<TablaUsuarios />} />
        <Route path="/actualizarUsuarios" element={<ActualizarUsuarios />} />

        {/* Rutas de Préstamo */}
        <Route path="/registrarPrestamo" element={<ActualizarPrestamo />} />
        <Route path="/tablaPrestamos" element={<TablaPrestamos />} />
        <Route path="/actualizarPrestamo" element={<ActualizarPrestamo />} />

        {/* Rutas de Libros */}
        <Route path="/registrarLibro" element={<ActualizarLibro />} />
        <Route path="/tablaLibros" element={<TablaLibros />} />
        <Route path="/actualizarLibro" element={<ActualizarLibro />} />

        {/* Rutas de Categorías */}
        <Route path="/registrarCategoria" element={<ActualizarCategorias />} />
        <Route path="/tablaCategorias" element={<TablaCategorias />} />
        <Route path="/actualizarCategoria" element={<ActualizarCategorias />} />

        {/* Rutas de Autores */}
        <Route path="/registrarAutor" element={<ActualizarAutores />} />
        <Route path="/tablaAutores" element={<TablaAutores />} />
        <Route path="/actualizarAutor" element={<ActualizarAutores />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App