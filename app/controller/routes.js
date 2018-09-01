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
    app.get('/novo-curso', (req, res) => res.render('novo-curso', { title: 'Novo Curso' }));
    app.post('/novo-curso', (req, res) => curso.novo(res, req.body));

    // resposta de cadastro
    app.get('/novo-curso/cadastrado', (req, res) => curso.resposta(res));

    return this;
}