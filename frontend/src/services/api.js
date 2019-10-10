import axios from 'axios' // Importa o axios para ser utilizado como comunicação com API

const api = axios.create({
	baseURL: 'http://192.168.0.129:3333'
})

export default api