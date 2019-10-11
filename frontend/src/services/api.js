import axios from 'axios' // Importa o axios para ser utilizado como comunicação com API, precisa do Axios para haver comunicação com API.

// Cria o caminho que será chamado na api.
const api = axios.create({
	baseURL: 'http://192.168.0.129:3333'
})

// Exporta Api, para que seja enviado ao fonte que originou a chamada do api.js.
export default api