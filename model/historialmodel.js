const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historialSchema = new Schema({
  idhistorial: {type: Number, required: false},
  diagnostico: { type: String, required: true },
  tratamiento: { type: String, required: true },
  fecha: { type: Date, required: true },
},{versionkey: false});


const Historial = mongoose.model('historial', historialSchema);

module.exports = Historial;