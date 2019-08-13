import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Templates
import Header from './components/templates/header/Header'
import Footer from './components/templates/footer/Footer'


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Components
import Main from './components/main/Main'
import Messenger from './components/messenger/Messenger'
import NotFound from './NotFound'


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Styles
import './scss/main.scss'


export default class App extends Component {
	render() {
		const urlBase = '/test-nodeftp'

		return (
			<>
				<Header />

				<Router>
					<Switch>
						<Route exact path={`${urlBase}/`} component={Main} />
						<Route path={`${urlBase}/messenger/`} component={Messenger} />
						<Route component={NotFound} />
					</Switch>
				</Router>

				<Footer />
			</ >
		)
	}
}
