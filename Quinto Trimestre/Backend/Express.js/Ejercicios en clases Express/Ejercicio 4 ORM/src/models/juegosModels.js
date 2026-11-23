let conexion=require("../conexion/db")
let {DataTypes}=require('sequelize')
let Personaje=require('./personajesModels')

let Juego = conexion.define('Juego', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{
    tableName:'juegos',
    timestamps:false
}
)

// Juego.hasMany(Personaje, {
//     foreignKey:"id_juego",
//     as:'personajes'
// })
module.exports = Juego