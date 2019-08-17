import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Templates
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Components
import Main from './components/main/Main'
import Portfolio from './components/subpage/portfolio/Portfolio'
import Contact from './components/subpage/contact/Contact'
// import Messenger from './components/messenger/Messenger'
import NotFound from './NotFound'


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Font awesome
import './components/vendor/FontAwesome'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Styles
import './scss/main.scss'


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Main app, handles routing
export default class App extends Component {
	render() {
		return (
			<Router>
				<Header />

				<Switch>
					<Route exact path={`${process.env.REACT_APP_BASE}/`} component={Main} />
					<Route exact path={`${process.env.REACT_APP_BASE}/portfolio/`} component={Portfolio} />
					<Route exact path={`${process.env.REACT_APP_BASE}/contact/`} component={Contact} />
					<Route component={NotFound} />
				</Switch>

				<Footer />
			</Router>
		)
	}
}
