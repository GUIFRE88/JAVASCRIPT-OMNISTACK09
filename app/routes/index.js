module.exports = function(application){

  // Rota principal
  application.get('/',function(req, res){
    application.app.controllers.index.home(application, req, res) // Chama e executa função do controller index. 
  })
}
