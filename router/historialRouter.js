const express = require('express')

const router = express.Router()

const historialRouter = require('../controller/historialController')

//Mostrar 
router.get('/', historialRouter.visualizar);

//Insertar
router.post('/crear', historialRouter.crear);

//Post
router.post('/editar', historialRouter.editar);

//delete 
router.get('/borrar/:id', historialRouter.eliminar);

module.exports = router;