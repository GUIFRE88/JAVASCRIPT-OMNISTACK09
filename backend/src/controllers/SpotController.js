const Spot = require('../models/Spot')

module.exports = {
	async store(req,res){
		//console.log(req.body)
		//console.log(req.file)

		const {filename} = req.file // Busca os arquivos enviados
		const {company, techs, price } = req.body // Busca o dados enviados pelo body
		const {user_id} = req.headers // Busca informação do header, que no caso é utilizada de forma genérica.

		const spot = await Spot.create({
			user: user_id,
			thumbnail: filename,
			company,
			techs: techs.split(',').map(tech => tech.trim()) // Split - separa o conteúdo do array em string. Map- percorre o array e retira espaçamentos em branco, para não dar problema na quebra do texto.
		})

		return res.json(spot)
	}
}