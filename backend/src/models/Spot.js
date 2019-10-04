/*
	Models - Contêm apenas a estrutura de bancos que será utilizada,
	no caso as Schemas.

*/

const mongoose = require('mongoose') // Importa o Mongoose

// Cria a estrutura do banco de dados.
const SpotSchema = new mongoose.Schema({
	thumbnail: String, // Caracter.
	company: String, // Caracter.
	price: Number, // Numérico.
	techs:[String], // Determina que é um array de strings.
	user: {
		type: mongoose.Schema.Types.ObjectId, // Utiliza um identificar automático criado pelo Mongoose.
		ref: 'User' // Determina que essa informação de usuário está se referindo ao Model User.
	}
})

module.exports = mongoose.model('Spot', SpotSchema) // Exporta a Schema para utilizar.