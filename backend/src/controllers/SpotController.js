const User = require('../models/User')
const Spot = require('../models/Spot')

module.exports = {

	// index - retorna lista de sessões
	// show - uma unica sessão
	// store - criar uma sessão
	// update - alterar uma sessão
	// destroy - excluir uma sessão

	// Retorna uma lista de sessões.
	async index(req, res){
		const {tech} = req.query // Retorna os valores adicionados no Insominia na aba de Query.

		const spots = await Spot.find( { techs: tech } ) // Utilizar o Spot que seria basicamente o Banco do cadasotr de Spots e busca o valor tech dentro de techs.

		return res.json(spots)

	},

	// Cria uma sessão.
	async store(req,res){
		//console.log(req.body)
		//console.log(req.file)

		const {filename} = req.file // Busca os arquivos enviados
		const {company, techs, price } = req.body // Busca o dados enviados pelo body
		const {user_id} = req.headers // Busca informação do header, que no caso é utilizada de forma genérica.

		const user = await User.findById(user_id)

		if(!user){
			return res.status(400).json( { error: 'Usuário não exite!' } )
		}

		const spot = await Spot.create({
			user: user_id,
			thumbnail: filename,
			company,
			techs: techs.split(',').map(tech => tech.trim()), // Split - separa o conteúdo do array em string. Map- percorre o array e retira espaçamentos em branco, para não dar problema na quebra do texto.
			price
		})

		return res.json(spot)
	}
}