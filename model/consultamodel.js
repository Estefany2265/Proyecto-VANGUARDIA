const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consultaSchema = new Schema({
  idconsulta: {type: Number, required: false},
  motivo: { type: String, required: true },
  diagnostico: { type: String, required: true },
  tratamiento: { type: String, required: true },
  fecha: { type: Date }
},{versionkey: false});


const Consulta = mongoose.model('consulta', consultaSchema);

module.exports = Consulta;

//