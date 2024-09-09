const express = require ('express')
const app = express()
const porta = 3000
app.use(express.json());


const criarFuncionario = require ('./criar')
app.post('/criar', criarFuncionario)

const listarFuncionarios = require ('./listar')
app.get('/listar', listarFuncionarios)

const deletarFuncionario = require ('./deletar')
app.delete('/deletar/:id', deletarFuncionario)

const atualizarFuncionario = require ('./atualizar')
app.put('/atualizar/:id', atualizarFuncionario)

const buscarPorSalario = require ('./buscarPorSalario')
app.get('./buscarPorSalario', buscarPorSalario)

app.use ((req, res) => {
    res.status(404).send('Pagina não encontrada ! ')
})
app.listen (porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})