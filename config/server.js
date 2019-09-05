// Importar o módulo do FrameWork Express
var express = require('express')

// Importa o módulo do Consign
var consign = require('consign');

// Importa o módulo do Body-parser
var bodyParser = require('body-parser')

// Importa o módulo do express-validator
var expressValidator = require('express-validator')

// Importa o objeto do express
var app = express();

// Setar as variaveis 'view engine' e 'views' do express.
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Configurar os middleware statics
app.use(express.static('./app/public'));

// Configurar o middleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Configurar o middleware express-validator
app.use(expressValidator());

// Efetua o auto-load das rotas, models e controllers para o objeto app.
consign()
  .include('app/routes')
  .then('app/models')
  .then('app/controllers')
  .into(app)

// Exporta o objeto App
module.exports = app;
