import React, { useState } from 'react'; // A tag do react sempre é necessária. O useState é importado para criação estados de usuário.
import api from './services/api' // Importa a API com Axios.
import './App.css'; // Realiza importação do CSS.
import logo from './assets/logo.svg'

function App() {

	// Cria a variavel email e cria a função setEmail para jogar o valor pra variavel.
	const [email, setEmail] = useState('')

	// Função utulizada no botão do form logo abaixo.
	async function handleSubmit(event){

		event.preventDefault() // Determina que não carregará a pagina automaticamente.

		// Chama a api a rotina de sessions enviando o email por Json.
		const response = await api.post('/sessions',{ email	})

		// Busca apenas o ID de dentro da responso, pois dentro de Data tem vários valores do User.
		const { _id }   = response.data

		// storage é como se fosse o banco de dados do navegador, valores em memória.
		// Salva o _id dentro do storage como 'user'
		localStorage.setItem('user', _id)


	}

	return (
		<div className="container">
			<img src={logo} alt="AirCnc"/>
			<div className="content">
				<p>
					Oferece <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
				</p>
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">E-MAIL *</label>
					<input
						type="email"
						id="email"
						placeholder="Seu melhor e-mail"
						value={email}
						/* onChange é chamado quando cliente preenche algum valor no campo. */
						/* É realizado a criação de um evento para enviar o valor digitado. */
						/* O valor será enviado através da função setEmail */
						/* Quando usuário preenche algo em tela, gera um event. */
						onChange={event => setEmail(event.target.value)}
					/>
					<button type="submit" className="btn">Entrar</button>
				</form>
			</div>
		</div>
 	)
}

export default App;
