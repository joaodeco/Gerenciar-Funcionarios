const {funcionarios} = require ('./data')

function criarFuncionario(req, res){
    console.log(req.body)
    const novoFuncionario = {

        id: funcionarios.length +1,
        nome: req.body.nome,
        cargo: req.body.cargo,
        departamento: req.body.departamento,
        salario: req.body.salario
        
    }
    funcionarios.push(novoFuncionario)
    res.status(201).send({mansage: ' Funcionário criado com sucesso! ', funcionarios: novoFuncionario })
}

module.exports = criarFuncionario   