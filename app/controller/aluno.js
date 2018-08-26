module.exports = (app) => {
    const object = {};
    const Aluno = app.model.aluno;
    
    object.login = function (dados) {
        let busca = Aluno.findOne({'rm': dados.rm});
        busca.exec((err, aluno) => {
            if (err) {
                console.log('Usuario não encontrado!');
                return false;
            }

            console.log(`Ola ${aluno.nome}`);
        })
    }

    return object;
}