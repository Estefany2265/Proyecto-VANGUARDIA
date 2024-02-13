const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recetaSchema = new Schema({
  idreceta: {type: Number, required: false},
  medicamento: { type: String, required: true },
  dosis: { type: String, required: true },
  instrucciones: { type: String, required: true },
},{versionkey: false});


const Receta = mongoose.model('receta', recetaSchema);

module.exports = Receta;