import React from 'react'; // A tag do react sempre é necessária.
import './App.css'; // Realiza importação do CSS.
import logo from './assets/logo.svg'

function App() {
  return (
	<div className="container">
		<img src={logo} alt="AirCnc"/>
		<div className="content">
			<p>
				Oferece <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
			</p>
			<form>
				<label htmlFor="email">E-MAIL *</label>
				<input
					type="email"
					id="email"
					placeholder="Seu melhor e-mail"
				/>
				<button type="submit">Entrar</button>
			</form>
		</div>
	</div>
  )
}

export default App;
