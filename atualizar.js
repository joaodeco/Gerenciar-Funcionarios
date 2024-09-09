const { ftruncateSync } = require('fs')
const {funcionarios} = require ('./data')

const atualizarFuncionario = (req, res) => {
    const { id } = req.params
    const novoNome = req.body.nome
    const novoCargo  = req.body.carg
    const novoDepartamento = req.body.departamento
    const novoSalario = req.body.salario

    const funcionario = funcionarios.find((b) => b.id == id)

    if (!funcionario) {
        return res.status(404).send({ message: 'Funcionário não encontrado' })
    }

    funcionario.nome = novoNome
    funcionario.cargo = novoCargo
    funcionario.departamento = novoDepartamento
    funcionario.salario = novoSalario
    res.status(200).send({
        message: 'Funcionario atualizado com sucesso!',
        funcionario: funcionario
    });
}

module.exports = atualizarFuncionario