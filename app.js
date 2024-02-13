
const express = require('express');


const app = express();
const db= require('./database');


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));


const consultaControler = require('.//router/consultaRouter');
const historialControler= require('./router/historialRouter');
const usuarioControler = require('./router/usuariosrouter');
const pacientesController = require('./router/pacientesRouter');
const recetaControler = require('./router/recetaRouter')

app.use(historialControler);
app.use(consultaControler);
app.use(usuarioControler);
app.use(pacientesController);
app.use(recetaControler)



app.listen(3000,()=>{

    console.log('SERVER IS UP...!');
})
