/* Importar as configurações do servidor */
var app = require('./config/server')

/* Parametrizar a porta de escutar */
app.listen(80, function(){
  console.log('Servidor Online')
})
