// import export  let ex = require
const express = require('express');
//importar el cors para que funcionen pero primero hay que instalarlos con el comando npm install cors
const cors = require('cors');
const app = express();
const PORT= 3000
//permiso para poder unir el backend con el frontend
app.use(cors({origin:"http://localhost:5173"}))
//sin este no se puede hacer el post 
app.use(express.json())

app.get('/Santiago',(req,res)=>{
    res.json({"Mensaje": "Esto es un mensaje de prueba"})
});
app.get('/Erik',(req,res)=>{
    res.json({"Saludo":"Hola Erik"})
});
app.post('/Guardar',(req,res)=>{
    let {nombre,apellido} = req.body
    res.json({"Dato_enviado": nombre,
        "Dato_apellido": apellido,
        "Mensaje": "Esta es una prueba"
    })
});
const middleware = (req, res, next) => {
    console.log('¡Petición interceptada!');
    next(); // Pasa al siguiente middleware o ruta
};
app.use(middleware)
// puerto
app.listen(PORT,()=>{
    console.log('Servidor ejecutandose correctamente'+ PORT)
});

