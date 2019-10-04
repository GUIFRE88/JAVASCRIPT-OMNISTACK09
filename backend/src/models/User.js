/*
	Models - Contêm apenas a estrutura de bancos que será utilizada,
	no caso as Schemas.

*/

const mongoose = require('mongoose') // Importa o Mongoose

// Cria a estrutura do banco de dados.
const UserSchema = new mongoose.Schema({
	email: String // String - caracter // Number - numérico / Boolean - lógico.
})

module.exports = mongoose.model('User', UserSchema) // Exporta a Schema para utilizar.