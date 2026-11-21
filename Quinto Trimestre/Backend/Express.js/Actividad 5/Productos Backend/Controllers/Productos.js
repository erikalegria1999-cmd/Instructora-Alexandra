const conectar = require("../Conexion/db")

class Productos{
    RegistrarProductos= async (req,res)=>{
        const { proNombre, proDescripcion, proStock, proPrecio}= req.body
        let sql = "INSERT INTO productos(proNombre, proDescripcion, proStock,proPrecio) VALUES (?,?,?,?)"

        let [respuesta] = await conectar.query(sql,
            [proNombre,
            proDescripcion,
            proStock,
            proPrecio])
            console.log(respuesta)
            return res.json({
                "Mensaje":"Producto Añadido",
                "Nombre": proNombre,
                "precio": proPrecio
            })
    }
    VerProductos = async (req,res)=>{
        let respuesta = await conectar.query("SELECT * FROM productos")
    res.json({respuesta})}

    EditarProductos = async(req,res)=>{
        const {id,
            proNombre,
            proDescripcion,
            proStock,
            proPrecio}= req.body
        let [respuesta] = await conectar.query("UPDATE productos SET proNombre =?,proDescripcion = ?, proStock=?, proPrecio = ? WHERE id = ?", [
            proNombre,
            proDescripcion,
            proStock,
            proPrecio,
            id])
        if(respuesta ===0){
            return res.json({"Mensaje":"No se puede editar"})
        }
        res.json({
            "id": id,
            "Mensaje": "Editado correctamente" 
        })
    }
    EliminarProducto= async (req,res)=>{
        const {id}=req.body
        let [respuesta] = await conectar.query(
            "DELETE FROM productos WHERE id =?",[id])
        if(respuesta ===0){
            return res.json({"mensaje":"El producto no existe o ya fue eliminado"})
        }
        res.json({"Mensaje":"Producto Eliminado correctamente"})    
    }

}

module.exports = Productos
