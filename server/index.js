import Express from 'express'
const app = Express()

app.get('/pegar', function(req, res){
    res.send(' mensagem')
})
app.get('/pegaroutra', function(req, res){
    res.send('outra')
})


app.listen(8000)