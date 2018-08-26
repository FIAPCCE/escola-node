const mongoose = require('mongoose');
module.exports = (app) => {
    const object = {};

    const Schema = mongoose.Schema;
    const Aluno = new Schema({
        rm: { type: Number },
        nome: { type: String },
        pass: { type: String },
        email: { type: String },
        curso: { type: String }
    });

    return mongoose.model('Aluno', Aluno);
}