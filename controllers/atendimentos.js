const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send("Rota de atendimentos! realizando novo get"))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.Adiciona(atendimento)
        res.send("Rota de atendimentos! Fazendo um post")
    })
}