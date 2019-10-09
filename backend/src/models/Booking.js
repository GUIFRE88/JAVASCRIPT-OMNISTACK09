const mongoose = require('mongoose') // Importa o Mongoose

// Cria a estrutura do banco de dados.
const BookingSchema = new mongoose.Schema({
	date: String,
	approved: Boolean,
	user: {
		type: mongoose.Schema.Types.ObjectId, // Utiliza um identificar automático criado pelo Mongoose.
		ref: 'User' // Determina que essa informação de usuário está se referindo ao Model User.
	},
	spot: {
		type: mongoose.Schema.Types.ObjectId, // Utiliza um identificar automático criado pelo Mongoose.
		ref: 'Spot' // Determina que essa informação de usuário está se referindo ao Model User.
	}
})

module.exports = mongoose.model('Booking', BookingSchema) // Exporta a Schema para utilizar.