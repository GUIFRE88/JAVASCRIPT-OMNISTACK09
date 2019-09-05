module.exports.iniciaChat = function(application, req, res){

  var dadosForm = req.body // Busca propriedades passadas pelo Form.

  req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty() // Verifica se a imformação não está vazia.
  req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres.').len(3, 15) // Verifica tamanho da informação digitada.

  var erros = req.validationErros() // Busca os erros.

  if(erros){
    res.send('Existem erros no formulário')
    return
  }


  res.render('chat')
}
