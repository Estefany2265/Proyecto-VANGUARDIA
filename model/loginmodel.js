const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  idlogin: {type: Number, required: false},
  user: { type: String, required: true },
  rol: { type: String, required: true },
},{versionkey: false});


const Login = mongoose.model('login', loginSchema);

module.exports = Login;