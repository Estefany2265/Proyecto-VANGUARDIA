const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
  idusuarios: {type: Number, required: false},
  email: { type: String, required: true },
  contrasena: { type: String, required: true },
  rol: { type: String, required: true },
},{versionkey: false});


const Usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = Usuarios;