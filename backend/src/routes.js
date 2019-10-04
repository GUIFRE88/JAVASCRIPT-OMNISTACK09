const express = require('express') // Importa o express.
const multer = require('multer') // Importa o multer para trabalhar com arquivo e fotos.
const uploadConfig = require('./config/upload') // Importa o arquivo upload.
const SessionController = require('./controllers/SessionController') // Iimporta o Controller.
const SpotController = require('./controllers/SpotController') // Iimporta o Controller.

const routes = express.Router() // Importa o rotas.
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store )
routes.post('/spots', upload.single('thumbnail'), SpotController.store )

module.exports = routes