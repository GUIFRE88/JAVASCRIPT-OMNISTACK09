/*
	Controllers - São responsáveis por fazer validações e regras de negócios.

*/

// index - retorna lista de sessões
// show - uma unica sessão
// store - criar uma sessão
// update - alterar uma sessão
// destroy - excluir uma sessão

const User = require('../models/User') // Importa o Schema que será utilizado, para cadastro de usuário.

module.exports = {
	async store(req, res){
		const { email } = req.body // Usando a {} ele buscará o email de dentro do req.body

		// findOne - Função padrão para buscar o registro dentro de algo.
		// {email: email} - poderia ser escrito assim, porém pelo campo ter o mesmo nome da variavel pode ser passado da forma reduzida {email}
		let user = await User.findOne({email})

		// Caso usuário não exista, chama a modelo de criação.
		if(!user){
			const user = await User.create({ email })
		}

		return res.json({user})
	}

}