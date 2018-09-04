const mongoose = require('mongoose');

module.exports = (app) => {
    const object = {};

    const uri = 'mongodb://localhost:27017/banco_330526';
    
    mongoose.set('useFindAndModify', false);
    mongoose.connect(uri, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => {
        console.log('Mongoose conectado!');
    })

    return object;
}