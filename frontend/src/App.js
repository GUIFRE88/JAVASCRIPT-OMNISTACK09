import React from 'react'; // A tag do react sempre é necessária. O useState é importado para criação estados de usuário.
import './App.css'; // Realiza importação do CSS.
import logo from './assets/logo.svg' // Importa logo da página principal.

// Importa as rotas que serão utilizadas.
import Routes from './routes'

function App() {
	return (
		<div className="container">
			<img src={logo} alt="AirCnc"/>
			<div className="content">
				<Routes />
			</div>
		</div>
 	)
}

export default App;
