const mongoose = require('mongoose');

const schemaUsuario = mongoose.Schema({
    "nombre": { type: String, required: true },
    "correo": { type: String, required: true, unique: true },
    "nacimiento": { type: Date, required: true },
    "genero": { type: String, required: true },
    "contrasenna": { type: String, required: false }
});

let modelo = mongoose.model('Usuario', schemaUsuario, 'usuarios');

module.exports = modelo;