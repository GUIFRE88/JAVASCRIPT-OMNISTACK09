const express = require('express') // Importa Express
const mongoose = require('mongoose') // Importa Express
const cors = require('cors') // Importa cors para que seja possível o FrontEnd acessar a Api.
const routes = require('./routes') // Importa o documento de Rotas
const path = require('path') // Importa para mexer com pastas.

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-0k2bb.mongodb.net/semana09?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

app.use(cors())
app.use(express.json()) // Determina que o express entenderá formato Json para envio de POST.
app.use(routes) // Determina que utiliza o sistema de rotas.
app.use('/files', express.static(path.resolve(__dirname, '..','uploads'))) // Determina que será utilizado lugares estáticos para buscar uploads dentro da aplucação.
app.listen(3333) // Porta que o servidor será aberto.

// Métodos mais utilizados no app.
  // GET - Buscar informação.
  // POST - Criar uma nova informação.
  // PUT - Editar alguma informaçã.
  // DELETE - Excluir alguma informação.

// req.query - Acessar query params(para filtros).
// req.params - Acessar route params (para edição, delete).
// req.body - Acessar corpo da requisição (para criação e edição.)
/*
app.post('/users', (req, res)=>{
  //req - Parâmetro enviado pelo usuário.
  //res - Parâmetro para devolução da resposta.
  return res.json(req.body)

} )*/


