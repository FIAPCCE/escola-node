module.exports = (app) => {
    const aluno = app.controller.aluno;
    const curso = app.controller.curso;

    // pagina inicial
    app.get('/', (req, res) => res.render('index', { title: 'Login' }));
    app.post('/', (req, res) => aluno.login(req, res, req.body));

    // cadastro
    app.get('/cadastro', (req, res) => res.render('novo-usuario', { title: 'Cadastro' }));
    app.post('/cadastro', (req, res) => aluno.cadastro(res, req.body));

    // dashboard
    app.get('/dashboard', (req, res) => curso.index(req, res));

    // curso
    app.get('/curso/novo', (req, res) => curso.cadastro(req, res));
    app.post('/curso/novo', (req, res) => curso.novo(res, req.body));
    app.get('/curso/:id', (req, res) => curso.get(req, res));
    app.get('/curso/', (req, res) => curso.index(req, res));

    // resposta de cadastro
    app.get('/curso/cadastrado', (req, res) => curso.resposta(req, res));

    // Logout
    app.get('/logout', (req, res) => aluno.logout(req, res));

    // 404
    app.get('*', (req, res) => res.redirect('/'));

    return this;
}