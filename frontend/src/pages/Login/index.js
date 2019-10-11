// useState - É usado para criar estados, digamos variaveis em memória de tempo de execução.
import React, { useState } from 'react' // Importa React.
import api from '../../services/api' // Importa a API com Axios.

// <> - Cria uma tag vazia, tipo uma div, porém é criado assim apenas pq o retorno do componente react deve estar aglutinado.
export default function Login( { history } ){ // history - É um objeto para auxiliar na mudança de página, contêm o histórico de páginas.

	// Cria a variavel email e cria a função setEmail para jogar o valor pra variavel.
	const [email, setEmail] = useState('')

	// Função utulizada no botão do form logo abaixo.
	async function handleSubmit(event){

		event.preventDefault() // Determina que não carregará a pagina automaticamente.

		// Chama a api a rotina de sessions enviando o email por Json.
		const response = await api.post('/sessions',{ email	})

		// Busca apenas o ID de dentro da response, pois dentro de Data tem vários valores do User.
		const { _id }   = response.data

		// storage é como se fosse o banco de dados do navegador, valores em memória.
		// Salva o _id dentro do storage como 'user'
		localStorage.setItem('user', _id)

		history.push('/dashboard') // Manda o usuário para rota dashboard

	}

	return (
		<>
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
		</>
	)
}