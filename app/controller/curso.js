module.exports = (app) => {
    const object = {};
    const Curso = app.model.curso;

    object.novo = function (req, dados) {
        const curso = new Curso(dados);
        curso.save();

        req.redirect('/novo-curso/cadastrado');
    }

    object.index = function (res) {
        const cursos = Curso.find();
        
        cursos.exec()
        .then(cursos => {
            res.render('dashboard', { cursos: cursos, title: 'Listagem dos cursos'});
        })
        .catch(err => console.log(err));
    }

    object.resposta = function (res) {
        res.render('cadastro-resposta', { elemento: 'Curso'});
    }

    object.get = function (req, res) {
        const curso = Curso.findOne({ '_id': req.params.id });
        curso.exec()
        .then(curso => res.render('curso', { curso, title: curso.nome}))
        .catch(err => res.redirect('/dashboard'));
    }

    return object;
}