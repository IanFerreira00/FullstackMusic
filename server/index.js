import Express from 'express';

const app = Express()
app.use(Express.json())

app.get('/pegar', function (req, res) {
    res.send('enviar esta mensagem')
})

app.get('/pegar2', function(req,res){
    res.send('Mensagem 2')
})

app.post('/registro', function(req,res){
    // verificar se todos os campos foram enviados
    try{
const {nome, sobrenome, email, senha, dataNascimento} = req.body
if(!nome ||!sobrenome ||!email ||!senha || !dataNascimento) {
    res.send('todos os campos devem ser preenchidos')
}
return
console.log('criar user')
    } catch (erro) {

    }
})

app.listen(8000)