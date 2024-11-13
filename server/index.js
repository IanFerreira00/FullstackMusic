import Express from 'express';
import { User, criarTabelas } from './db.js'
import { rotas_autenticacao } from "./rotas/rotas_autenticacao.js";
import cors from 'cors'
const app = Express()
app.use(Express.json())
app.use (cors())
// app.get('/pegar', function (req, res) {
//     res.send('enviar esta mensagem')
// })

// app.get('/pegar2', function (req, res) {
//     res.send('Mensagem 2')
// })

//criarTabelas() --> usar so uma vez já que com o 'force: true' ele sempre apaga a tabela existente e cria uma nova do zero

app.use('/autenticacao', rotas_autenticacao )
app.listen(8000)