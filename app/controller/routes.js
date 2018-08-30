module.exports = (app) => {
    const aluno = app.controller.aluno;
    const curso = app.controller.curso;

    // pagina inicial
    app.get('/', (req, res) => res.render('index'));
    app.post('/', (req, res) => aluno.login(res, req.body));

    // novo cadastro
    app.get('/cadastro', (req, res) => res.render('novo-usuario'));

    // dashboard
    app.get('/dashboard', (req, res) => res.render('dashboard'));

    // curso
    app.get('/curso/novo', (req, res) => res.render('novo-curso'));
    app.post('/curso/novo', (req, res) => curso.novo(res, req.body));

    return this;
}