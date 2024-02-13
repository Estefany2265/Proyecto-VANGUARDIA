const express = require('express')

const router = express.Router()

const recetaRouter = require('../controller/recetaControler')

//Mostrar 
router.get('/', recetaRouter.visualizar);

//Insertar
router.post('/crear', recetaRouter.crear);

//Post
router.post('/editar', recetaRouter.editar);

//delete 
router.get('/borrar/:id', recetaRouter.eliminar);

module.exports = router;