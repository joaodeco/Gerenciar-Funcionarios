const express = require('express')
const router = express.Router()

const criarFuncionario = require ('./criar')
router.post('/criar', criarFuncionario)

const listarFuncionarios = require ('./listar')
router.get('/listar', listarFuncionarios)

const deletarFuncionario = require ('./deletar')
router.delete('/deletar/:id', deletarFuncionario)

const atualizarFuncionario = require ('./atualizar')
router.put('/atualizar/:id', atualizarFuncionario)

const buscarPorSalario = require ('./buscarPorSalario')
router.get('./buscarPorSalario', buscarPorSalario)

module.exports = router
