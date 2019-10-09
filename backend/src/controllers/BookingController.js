const Booking = require('../models/Booking')

module.exports = {
	async store(req, res){

		const { user_id } = req.headers
		const { spot_id } = req.params
		const { date } = req.body

		const booking = await Booking.create({
			user : user_id,
			spot: spot_id,
			date
		})

		// No caso concatena a tabela de Spot e User dentro do Booking, trás toda a estrutura e não apenas o ID.
		await booking.populate('spot').populate('user').execPopulate()

		return res.json(booking)

	}
}