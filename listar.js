const {funcionarios} = require ('./data')

function listarFuncionarios(req, res){
    res.status(200).send(funcionarios)
}

module.exports = listarFuncionarios