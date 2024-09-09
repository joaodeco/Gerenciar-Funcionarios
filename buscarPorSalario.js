const {funcionarios} = require ('./data')

function buscarPorSalario(req, res){
    const salario = perseInt(req.query.salario)
    if(funcionarios === 0){
        return res.status(404).send({menssage: 'Não a um salário desse valor'})
    } else {
        const funcionariosEncontrados = funcionarios.filter(est => est.salario == salario)
        if(funcionariosEncontrados.length > 0){
            return res.status(200).send({
                menssage: 'Funcionarios encontrados com esse sálario',
                funcionarios: funcionariosEncontrados
            })
        } else {
            return res.status(404).send({menssage: 'Nenhum funcionario encontrado com esse salário !'})
        }
    }
}


module.exports = buscarPorSalario