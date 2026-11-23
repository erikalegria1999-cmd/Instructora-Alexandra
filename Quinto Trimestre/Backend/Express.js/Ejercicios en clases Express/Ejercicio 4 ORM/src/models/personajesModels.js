let conexion=require("../conexion/db")
let {DataTypes}=require('sequelize')
let Juego=require('./juegosModels')
let Personaje = conexion.define('Personajes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    id_juego: {
        type: DataTypes.INTEGER,
        allowNull:true
    }
},
{
    tableName:'personajes',
    timestamps:false
}
)

// Personaje.belongsTo(Juego, {
//     foreignKey:'id_juego',
//     as:'juego'})
module.exports = Personaje