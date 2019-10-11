import React from 'react'

// BrowserRouter - Informar pra nossa aplicação que a partir de onde ele é chamado teremos um roteamento de componentes.
// Switch - Determina que será chamado apenas uma rota por vez.
// Route - Determina que trabalhará com rotas.
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login' // Importa a rota de Login.
import Dashboard from './pages/Dashboard' // Importa rota Dashboard.
import New from './pages/New' // Importa rota New.

// Exporta função de rotas.
export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component = {Login} />
				<Route path="/dashboard" component = {Dashboard} />
				<Route path="/new" component = {New} />
			</Switch>
		</BrowserRouter>
	)
}

// exact - Determina que a rota chamada é exatamente o que está sendo comparado no 'path'.
// path - Rota que está sendo ou será chamada.
// component - Objeto que contêm a rota.