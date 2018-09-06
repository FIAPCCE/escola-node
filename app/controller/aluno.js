const cookie = require('cookie-session');

module.exports = (app) => {
    const object = {};
    const Aluno = app.model.aluno;
    const Session = app.middleware.session;
    
    object.login = function (req, res, dados) {
        let busca = Aluno.findOne({'rm': dados.rm, 'pass': dados.pass});
        busca.exec((err, aluno) => {
            if (err || aluno === null) {
                res.render('index', { error: 'Usuario não encontrado!' });
                return false;
            }

            Session.set(req, aluno._id);
            res.redirect('/curso');
        })
    }

    object.cadastro = function (req, dados) {
        const usuario = new Aluno(dados);
        usuario.save();

        req.redirect('/');
    }

    object.logout = function (req, res) {
        req.session.destroy(err => {
            if (err) {
                console.log(err);
                return false;
            }

            res.redirect('/');
        });
    }

    return object;
}