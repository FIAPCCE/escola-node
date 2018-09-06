module.exports = (app) => {
    const object = {};
    const Curso = app.model.curso;
    const Session = app.middleware.session;

    object.cadastro = function (req, res) {
        Session.check(req, res);
        res.render('novo-curso', { title: 'Novo Curso' });
    }

    object.novo = function (req, dados) {
        const curso = new Curso(dados);
        curso.save();

        req.redirect('/curso/cadastrado');
    }

    object.index = function (req, res) {
        Session.check(req, res);
        const cursos = Curso.find();
        
        cursos.exec()
        .then(cursos => {
            res.render('dashboard', { cursos: cursos, title: 'Listagem dos cursos'});
        })
        .catch(err => console.log(err));
    }

    object.resposta = function (req, res) {
        res.render('cadastro-resposta', { elemento: 'Curso'});
    }

    object.get = function (req, res) {
        Session.check(req, res);

        const curso = Curso.findOne({ '_id': req.params.id });
        curso.exec()
        .then(curso => res.render('curso', { curso, title: curso.nome}))
        .catch(err => res.redirect('/curso'));
    }

    return object;
}