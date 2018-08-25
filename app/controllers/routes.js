module.exports = (app) => {
    // let controller = app.controllers;
    
    app.get('/', (req, res) => res.render('index'));
}