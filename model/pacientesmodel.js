const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pacientesSchema = new Schema({
  idpaciente: {type: Number, required: false},
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  sexo: { type: String, required: true },
  contacto: { type: Number, required: true },
  direccion: { type: String, required: true },
},{versionkey: false});


const Pacientes = mongoose.model('pacientes', pacientesSchema);

module.exports = Pacientes;