const express = require('express');
const router = express.Router();
const Usuarios = require('../model/usuariosmodel');

//Insertar
function crear(req, res){
    const usuarios = new Usuarios({
        email: req.body.email,
        contrasena: req.body.contrasena,
        rol: req.body.rol
        
    })
    usuarios.save().then(
        res.redirect('/')
    ).catch(error=>res.status(500).send({error}))
}

//Mostrar
function visualizar(req, res){
    Usuarios.find({}).then(Usuarios=>{
        if(Usuarios.lenght) return res.render('index', {Usuarios:Usuarios})
        return res.status(204).send({messaje: 'NO CONTENT'});

    }).catch(error=>res.status(500).send({error}))
}

function editar(req, res){
    const idusuarios = req.body.idusuarios_editar
    const email = req.body.email_editar    
    const contrasena = req.body.constrasena_editar
    const rol = req.body.rol_editar
    Usuarios.findIdAndUddate(idusuarios, {email:email, contrasena:contrasena, rol:rol}).then(
        res.redirect('/')
    ).catch(error => res.status(500).send({error}))
}

function eliminar(req, res){
    const idusuarios = req.params.idusuarios
    Usuarios.findIdAndDelete(idusuarios).then(
        res.redirect('/')
    ).catch(error => res.status(500).send({error}))

}
module.exports = {
    visualizar,
    crear,
    editar,
    eliminar,
    router
}