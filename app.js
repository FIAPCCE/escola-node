const express = require('express'),
app = express(),
loader = require('express-load'),
bodyParser = require('body-parser');

/**
 * Express
 */

app.set('view engine', 'pug');
app.set('views', './app/view');
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 * Autoload com o express-loader
 */
loader('model',{cwd: './app'})
    .then('controller')
    .into(app);

// inicia o servidor
app.listen('3000', (req, res) => console.log('App escola: http://localhost:3000'));
