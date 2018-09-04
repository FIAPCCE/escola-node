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
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => console.log(`App escola: http://localhost:${port}`));
