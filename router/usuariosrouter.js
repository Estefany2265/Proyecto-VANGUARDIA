const express = require('express')

const router = express.Router()

const usuarioControler = require('../controller/usuarioscontroller')

//Mostrar 
router.get('/', usuarioControler.visualizar);

//Insertar
router.post('/crear', usuarioControler.crear);

//Post
router.post('/editar', usuarioControler.editar);

//delete 
router.get('/borrar/:id', usuarioControler.eliminar);

module.exports = router;