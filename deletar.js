const {funcionarios} = require ('./data')

const deletarFuncionario = (req, res) => {
    const { id } = req.params
    const index = funcionarios.findIndex((b) => b.id == id)
    
    if (index === -1) {
        return res.status(404).send('Funcionario não encontrado!');
    }

    const funcionarioDeletado = funcionarios.splice(index, 1)[0]

    res.status(201).send({
        mensage: 'Funcionário deletado com sucesso! ',
        funcionarios: funcionarioDeletado
    })
}

module.exports = deletarFuncionario