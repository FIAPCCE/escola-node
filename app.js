const express = require('express'),
app = express(),
consign = require('consign');

app.set('view engine', 'pug');
app.set('views', './app/views');
app.use(express.static('./app/public'));

/**
 * Autoload com o consign
 */
consign({cwd: './app'})
    .include('controllers')
    .include('models')
    .into(app);


// inicia o servidor
app.listen('3000', (req, res) => console.log('App escola: http://localhost:3000'));
