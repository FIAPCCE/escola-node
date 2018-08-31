const mongoose = require('mongoose');
module.exports = (app) => {
    const object = {};

    const Schema = mongoose.Schema;
    const Aluno = new Schema({
        nome: { type: String },
        email: { type: String },
        pass: { type: String }
    });

    return mongoose.model('Aluno', Aluno);
}