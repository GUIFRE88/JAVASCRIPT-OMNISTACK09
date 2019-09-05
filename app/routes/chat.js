module.exports = function(application){

  // Rota principal POST
  application.post('/chat',function(req, res){
    application.app.controllers.chat.iniciaChat(application, req, res)
  })

  // Rota principal GET
  application.get('/chat',function(req, res){
    application.app.controllers.chat.iniciaChat(application, req, res)
  })

}
