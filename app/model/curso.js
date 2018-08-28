const mongoose = require('mongoose');
module.exports = (app) => {
    const object = {};

    const Schema = mongoose.Schema;
    const Curso = new Schema({
        ch: { type: Number },
        nome: { type: String },
        descricao: { type: String },
        categoria: { type: String }
    });

    return mongoose.model('Curso', Curso);
}