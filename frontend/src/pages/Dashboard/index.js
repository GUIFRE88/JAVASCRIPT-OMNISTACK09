import React, { useEffect, useState } from 'react'
import api from '../../services/api'

export default function Dashboard(){

	// useState - Função padrão para jogar um estado para variavel spots.
	// spots - Variavel que será utilizada em memória para trabalhar com valores.
	// setSpots - Função que será utilizada para jogar valores na variável.
	const [spots, setSpots] = useState([]) // Seta um estado para trabalhar com os valores, que virão da api.

	// Função para busca inicial de dados, na api.
	useEffect( () => {

		async function loadSpost() {

			const user_id = localStorage.getItem('user') // Busca usuário logado, através do localStorage.
			const response = await api.get('/dashboard', {
				headers: { user_id }
			})

			setSpots(response.data) // Joga valor retornado da API para o estado.
		}

		loadSpost()

	}, [] )

	return (
		<>

			<ul className="spot-list">
				{spots.map(spot =>(
					<li key={spot._id}>
						<header></header>
						<strong>{spot.company}</strong>
						<span>{spot.price}</span>
					</li>
				))}
			</ul>

		</>
	)
}