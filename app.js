
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



// Rutas para la colección 'consulta'
app.get('/consulta', (req, res) => {
    // Aquí iría el código para obtener todas las consultas
    res.send('Obtener todas las consultas');
   });
   
   app.post('/consulta', (req, res) => {
    // Aquí iría el código para crear una nueva consulta
    res.send('Crear nueva consulta');
   });
   
   app.get('/consulta/:id', (req, res) => {
    // Aquí iría el código para obtener una consulta por ID
    res.send(`Obtener consulta con ID: ${req.params.id}`);
   });
   
   app.put('/consulta/:id', (req, res) => {
    // Aquí iría el código para actualizar una consulta por ID
    res.send(`Actualizar consulta con ID: ${req.params.id}`);
   });
   
   app.delete('/consulta/:id', (req, res) => {
    // Aquí iría el código para eliminar una consulta por ID
    res.send(`Eliminar consulta con ID: ${req.params.id}`);
   });
   

   // Rutas para la colección 'historial'
app.get('/historial', (req, res) => {
    
    res.send('Obtener el historial');
   });
   
   app.post('/historial', (req, res) => {
  
    res.send('agregar');
   });
   
   app.get('/historial/:id', (req, res) => {
   
    res.send(`Obtener historial con ID: ${req.params.id}`);
   });
   
   app.put('/historial/:id', (req, res) => {
   
    res.send(`Actualizar historial con ID: ${req.params.id}`);
   });
   
   app.delete('/historial/:id', (req, res) => {
   
    res.send(`Eliminar historial con ID: ${req.params.id}`);
   });
  

   // Rutas para la colección 'usuarios'
app.get('/usuarios', (req, res) => {
    
    res.send('Obtener usuarios');
   });
   
   app.post('/usuarios', (req, res) => {
  
    res.send('agregar un usuario');
   });
   
   app.get('/usuarios/:id', (req, res) => {
   
    res.send(`Obtener usuarios con ID: ${req.params.id}`);
   });
   
   app.put('/usuarios/:id', (req, res) => {
   
    res.send(`Actualizar usuarios con ID: ${req.params.id}`);
   });
   
   app.delete('/usuarios/:id', (req, res) => {
   
    res.send(`Eliminar usuarios con ID: ${req.params.id}`);
   });
  
   // Rutas para la colección 'pacientes'
app.get('/pacientes', (req, res) => {
    
    res.send('Obtener pacientes');
   });
   
   app.post('/pacientes', (req, res) => {
  
    res.send('agregar pacientes');
   });
   
   app.get('/pacientes/:id', (req, res) => {
   
    res.send(`Obtener pacientes con ID: ${req.params.id}`);
   });
   
   app.put('/pacientes/:id', (req, res) => {
   
    res.send(`Actualizar pacientes con ID: ${req.params.id}`);
   });
   
   app.delete('/paceintes/:id', (req, res) => {
   
    res.send(`Eliminar pacientes con ID: ${req.params.id}`);
   });
  

// Rutas para la colección 'recetas'
app.get('/recetas', (req, res) => {
    
    res.send('Obtener la recetas');
   });
   
   app.post('/recetas', (req, res) => {
  
    res.send('agregar recetas');
   });
   
   app.get('/recetas/:id', (req, res) => {
   
    res.send(`Obtener recetas con ID: ${req.params.id}`);
   });
   
   app.put('/recetas/:id', (req, res) => {
   
    res.send(`Actualizar recetas con ID: ${req.params.id}`);
   });
   
   app.delete('/recetas/:id', (req, res) => {
   
    res.send(`Eliminar recetas con ID: ${req.params.id}`);
   });
  


app.listen(3000,()=>{

    console.log('SERVER IS UP...!');
})

