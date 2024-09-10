const express = require ('express')
const app = express()
const porta = 3000
app.use(express.json());

const routerFuncionarios = require('./routerFuncionarios')

app.use('/funcionarios', routerFuncionarios)

const criarFuncionario = require ('./criar')
app.post('/', criarFuncionario)

const listarFuncionarios = require ('./listar')
app.get('/', listarFuncionarios)

const deletarFuncionario = require ('./deletar')
app.delete('/:id', deletarFuncionario)

const atualizarFuncionario = require ('./atualizar')
app.put('/:id', atualizarFuncionario)

const buscarPorSalario = require ('./buscarPorSalario')
app.get('./', buscarPorSalario)

app.use ((req, res) => {
    res.status(404).send('Pagina não encontrada ! ')
})
app.listen (porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})