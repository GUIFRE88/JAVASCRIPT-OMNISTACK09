import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import New from './pages/New'

// BrowserRouter - Cria um browser controlado por rotas.
// Switch - Determina que será possível chamar apenas 1 rota por vez.
// Route - Cria rota, com 'path' que caminho do browser e 'component' a rota que será chamada.
export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component = {Login} />
				<Route path="/dashboard" component = {Dashboard} />
				<Route path="/bew" component = {New} />
			</Switch>
		</BrowserRouter>
	)
}