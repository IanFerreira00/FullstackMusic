import Express from "express";
import { registro, login } from "../controlador/controlador_autenticacao.js";

const rotas_autenticacao = Express.Router()

rotas_autenticacao.post('/registro', registro)
rotas_autenticacao.post('/login', login)

export { rotas_autenticacao }