const express = require('express')

const router = express.Router()

const consultaRouter = require('../controller/consultaControler')

//Mostrar 
router.get('/', consultaRouter.visualizar);

//Insertar
router.post('/crear', consultaRouter.crear);

//Post
router.post('/editar', consultaRouter.editar);

//delete 
router.get('/borrar/:id', consultaRouter.eliminar);

module.exports = router;