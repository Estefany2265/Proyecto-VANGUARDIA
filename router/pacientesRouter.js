const express = require('express')

const router = express.Router()

const pacientesRouter = require('../controller/pacientesController')

//Mostrar 
router.get('/', pacientesRouter.visualizar);

//Insertar
router.post('/crear', pacientesRouter.crear);

//Post
router.post('/editar', pacientesRouter.editar);

//delete 
router.get('/borrar/:id', pacientesRouter.eliminar);

module.exports = router;