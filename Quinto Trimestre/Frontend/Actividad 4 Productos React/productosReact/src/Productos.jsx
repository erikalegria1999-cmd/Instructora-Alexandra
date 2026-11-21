import { useEffect, useState } from "react"

export default function Productos (){
    const [producto, setProducto] = useState([])

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [stock, setStock] = useState("")
    const [precio, setPrecio] = useState("")

    const [cargarDatos, setCargarDatos] = useState(null)


    function EditarProductos(i){
        setCargarDatos(i.id)
        setNombre(i.ProNombre || i.proNombre)
        setDescripcion(i.proDescripcion)
        setStock(i.proStock)
        setPrecio(i.proPrecio)
    }

    async function ActualizarProductos(){
        const productoActualizado = {
            id: cargarDatos,
            proNombre: nombre,
            proDescripcion: descripcion,
            proStock: stock,
            proPrecio: precio
        }
        let respuesta = await fetch("http://127.0.0.1:5000/editarProductos",{
            method: "PUT",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(productoActualizado)
        })
        let resultado = await respuesta.json()
        console.log("Producto Actualizado", resultado)
        alert("Producto Actualizado")

        setNombre("")
        setDescripcion("")
        setStock("")
        setPrecio("")
        setCargarDatos(null) 

        TraerProductos()
    }

    async function TraerProductos(){
        let respuesta = await fetch("http://127.0.0.1:5000/verProductos")
        let datos = await respuesta.json()
        console.log("Datos Productos", datos.respuesta[0])
        
        setProducto(datos.respuesta[0]) 
    }

    useEffect(()=>{
        TraerProductos()
    },[])

    async function RegistrarProductos (){        
        const nuevoProducto ={
            proNombre: nombre,
            proDescripcion: descripcion,
            proStock: stock,
            proPrecio: precio
        }
        let respuesta = await fetch("http://127.0.0.1:5000/ingresarProductos",{
            method: "POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(nuevoProducto)
        })
        let resultado = await respuesta.json()
        console.log("Producto Registrado", resultado)
        alert("Producto Registrado")

        setNombre("")
        setDescripcion("")
        setStock("")
        setPrecio("")

        TraerProductos()
    }
    async function EliminarProductos(idBorrar){
        let respuesta = await fetch("http://127.0.0.1:5000/eliminarProductos",{
            method: "DELETE",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({id: idBorrar})   
        })
        let resultado = await respuesta.json()
        console.log("Producto Eliminado", resultado)
        alert("Producto Eliminado")  

        TraerProductos()          
    }        
    return(
        <div >
            <h1 className="text-center mb-4 text-primary">
                Registro de Productos
            </h1>
            <form className="card p-4 shadow-sm mb-4 bg-light">
            <h3 className="card-title text-center mb-3 text-secondary">
                {cargarDatos ? "Actualizar Producto" : "Registrar Producto"}
            </h3>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
                <input 
                    type="text"
                    id="nombre"
                    className="form-control"
                    placeholder="Ingrese el nombre del producto" 
                    value={nombre}
                    onChange={(e) => { setNombre(e.target.value) }} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcion" className="form-label fw-bold">Descripción</label>
                <input 
                    type="text"
                    id="descripcion"
                    className="form-control"
                    placeholder="Ingrese la descripción"
                    value={descripcion}
                    onChange={(e) => { setDescripcion(e.target.value) }} 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="stock" className="form-label fw-bold">Stock</label>
                <input 
                    type="number"
                    id="stock"
                    className="form-control"
                    placeholder="123456"
                    value={stock}
                    onChange={(e) => { setStock(e.target.value) }} 
                />
            </div>
            <div className="mb-4">
                <label htmlFor="precio" className="form-label fw-bold">Precio</label>
                <input 
                    type="number"
                    id="precio"
                    className="form-control"
                    placeholder="1000"
                    value={precio}
                    onChange={(e) => { setPrecio(e.target.value) }} 
                />
            </div>
            <div className="d-grid">
                {cargarDatos ? (
                        <button type="button" className="btn btn-success btn-lg" onClick={ActualizarProductos}>
                            Actualizar
                        </button>
                    ) : (
                        <button type="button" className="btn btn-primary btn-lg" onClick={RegistrarProductos}>
                            Aceptar
                        </button>
                    )
                }
            </div>
        </form>

<div className="container mt-5">
    <h1 className="text-center mb-4 text-primary">
        Tabla de Productos
    </h1>
    
    <div className="table-responsive shadow-sm rounded">
        <table className="table table-striped table-hover table-bordered align-middle text-center mb-0">
            <thead className="table-primary">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {producto.map((i) => (
                    <tr key={i.id}>
                        <td className="fw-bold">{i.id}</td>
                        <td>{i.ProNombre || i.proNombre}</td>
                        <td>{i.proDescripcion}</td>
                        <td>{i.proStock}</td>
                        <td>${i.proPrecio}</td>
                        <td>
                            <button 
                                type="button" 
                                className="btn btn-warning btn-sm me-2" 
                                onClick={() => EditarProductos(i)}
                            >
                                Editar
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-danger btn-sm" 
                                onClick={() => EliminarProductos(i.id)}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
        </div>
    )
}