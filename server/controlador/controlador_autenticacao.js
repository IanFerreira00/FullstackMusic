import { User } from "../db.js";
import jwt from "jsonwebtoken"; 
import bcryptjs from "bcryptjs";

const registro = async (req, res) => {

    try {
        const { nome, sobrenome, email, senha, dataNascimento } = req.body
        if (!nome || !sobrenome || !email || !senha || !dataNascimento) {
            res.status(406).send('todos os campos devem ser preenchidos')
            return
        }
        if (await User.findOne({ where: { email: email } })) {
            res.status(400).send('usuario ja existe no sistema')
            return
        }
        const senhaSegura = bcryptjs.hashSync(senha, 10)
        const novoUsuario = User.create({
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            senha: senhaSegura,
            dataNascimento: dataNascimento,
        })
        res.status(201).send('ok usuario criado')
    } catch (erro) {
        console.log(erro)
    }
}

const login = async (req, res) => {
    try {
        const { email, senha } = req.body
        if (!email || !senha) {
            res.send("todos os campos devem ser preenchidos")
            return
        }
        const usuario = await User.findOne({ where: { email: email } })
        if (!usuario) {
            res.send('este email nao esta cadastrado')
            return
        }
        const senhaCorreta = bcryptjs.compareSync(senha, usuario.senha)  //compara a senha digitada com a senha salva
        if (!senhaCorreta) {
            res.send('senha correta')
            return
        }
        const token = jwt.sign(
            {
                nome: usuario.nome,
                email: usuario.email,
                status: usuario.status
            },
            'chavecriptografiasupersegyura',
            { expiresIn: "30d" }
        )
        res.send({ msg: 'voce foi logado', token: token })

    } catch (erro) {
        console.log(erro)
        res.status(500).send('Houve um problema')
    }
    //validar informações
    // verificar a existência do usuario
    // comparo a senha enviada com a senha do db
    //criar um token de autenticação
    // devolver a resposta com o token
}

const nova_senha = async (req, res) => {

    try {
        const {  senha } = req.body
        const { email } = req.params
        if ( !senha ) {
            res.status(406).send('todos os campos devem ser preenchidos')
            return
        }
        const usuario = await User.findOne({ where: { email: email } })
           
        if ( !usuario) {
            res.status(404).send('usuario não encontrado!')
            return
        }

        const senhaSegura = bcryptjs.hashSync(senha, 10)
        const novoUsuario = usuario.update({
            senha: senhaSegura
        })
        res.status(200).send('senha alterada com sucesso')
    } catch (erro) {
        console.log(erro)
        res.status(500).send('erro no servidor')
    }
}

export { registro, login, nova_senha }