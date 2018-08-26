module.exports = (app) => {
    const aluno = app.controller.aluno;

    // pagina inicial
    app.get('/', (req, res) => res.render('index'));
    app.post('/login', (req, res) => console.log(aluno.login(req.body)));

    return this;
}