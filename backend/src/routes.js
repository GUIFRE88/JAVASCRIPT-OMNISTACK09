const express = require('express') // Importa o express.
const multer = require('multer') // Importa o multer para trabalhar com arquivo e fotos.
const uploadConfig = require('./config/upload') // Importa o arquivo upload.
const SessionController = require('./controllers/SessionController') // Iimporta o Controller.
const SpotController = require('./controllers/SpotController') // Iimporta o Controller.
const DashboardController = require('./controllers/DashboardController') // Importa o Controller.
const BookingController = require('./controllers/BookingController') // Importa o Controller.

const routes = express.Router() // Importa o rotas.
const upload = multer(uploadConfig)

// Rotas das Sessions
routes.post('/sessions', SessionController.store )

// Rotas dos Spots
routes.get('/spots', SpotController.index )
routes.post('/spots', upload.single('thumbnail'), SpotController.store ) // upload.single - Determina que estará enviando 1 imagem.

// Rotas do Dashboard
routes.get('/dashboard', DashboardController.show )

routes.post('/spots/:id/bookings')

module.exports = routes