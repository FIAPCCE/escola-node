module.exports = (app) => {
    const aluno = app.controller.aluno;
    const curso = app.controller.curso;

    // pagina inicial
    app.get('/', (req, res) => res.render('index', { title: 'Login' }));
    app.post('/', (req, res) => aluno.login(res, req.body));

    // cadastro
    app.get('/cadastro', (req, res) => res.render('novo-usuario', { title: 'Cadastro' }));
    app.post('/cadastro', (req, res) => aluno.cadastro(res, req.body));

    // dashboard
    app.get('/dashboard', (req, res) => curso.index(res));

    // curso
    app.get('/curso/novo', (req, res) => res.render('novo-curso', { title: 'Novo Curso' }));
    app.post('/curso/novo', (req, res) => curso.novo(res, req.body));
    app.get('/curso/:id', (req, res) => curso.get(req, res));
    app.get('/curso/', (req, res) => curso.index(res));

    // resposta de cadastro
    app.get('/curso/cadastrado', (req, res) => curso.resposta(req, res));

    return this;
}