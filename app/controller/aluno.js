const cookie = require('cookie-session');

module.exports = (app) => {
    const object = {};
    const Aluno = app.model.aluno;
    
    object.login = function (req, dados) {
        let busca = Aluno.findOne({'rm': dados.rm, 'pass': dados.pass});
        busca.exec((err, aluno) => {
            if (err || aluno === null) {
                req.render('index', { error: 'Usuario não encontrado!' });
                return false;
            }

            app.use(cookie({
                name: 'sessionTest',
                keys: ['hhueeh', 'irineu'],
                maxAge: 24 * 60 * 60 * 1000
            }));

            console.log(req.cookies);

            req.redirect('/dashboard');
        })
    }

    return object;
}