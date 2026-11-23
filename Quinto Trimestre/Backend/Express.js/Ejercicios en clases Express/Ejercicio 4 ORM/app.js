const express = require('express');
const cors = require('cors');
const conexion=require('./src/conexion/db')
require ('dotenv').config();
const PORT=process.env.PORT

const app=express()
app.use(express.json());
app.use(cors());

const router=require('./src/routes/routeJuegos')
const rutaPersonajes = require("./src/routes/routePersonajes")

app.use('/api/juego', router)
app.use("/api/personaje",rutaPersonajes)

app.listen(PORT, () => {
    console.log("servidor inicializado "+PORT);
});