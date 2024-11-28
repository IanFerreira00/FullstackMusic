import Express from 'express';
import { User, criarTabelas } from './db.js'
import { rotas_autenticacao } from "./rotas/rotas_autenticacao.js";
import cors from 'cors'
const app = Express()
app.use(Express.json())
app.use (cors())

//criarTabelas() 

app.use('/autenticacao', rotas_autenticacao )
app.listen(8000)