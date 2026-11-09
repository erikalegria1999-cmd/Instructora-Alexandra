let express = require("express")
let PruebaController = require( "../controllers/PruebaController")

let router = express.Router()
let controllerp = new PruebaController

router.get("/prueba",controllerp.Pruebita)

module.exports=router