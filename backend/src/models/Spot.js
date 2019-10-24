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
},{
	// Determina que o mongo aceita criar campos virtuais.
	toJSON:{
		virtuals: true,
	}
})

// Cria apenas um campo virtual que não terá em base.
SpotSchema.virtual('thumbnail_url').get(function(){
	return `http://192.168.0.129:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema) // Exporta a Schema para utilizar.