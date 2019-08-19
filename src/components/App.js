import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Templates
import Header from './header/Header'
import Footer from './footer/Footer'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Components
import Main from './main/Main'
import Resume from './subpage/resume/Resume'
import Portfolio from './subpage/portfolio/Portfolio'
import Contact from './subpage/contact/Contact'
// import Messenger from './components/messenger/Messenger'
import NotFound from './NotFound'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Font awesome
import './vendor/FontAwesome'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Styles
import '../scss/main.scss'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Main app, handles routing
export default class App extends Component {
	render() {
		return (
			<Router>
				<Header />

				<Switch>
					<Route exact path={`${process.env.REACT_APP_BASE}/`} component={Main} />
					<Route
						exact
						path={`${process.env.REACT_APP_BASE}/resume/`}
						component={Resume}
					/>
					<Route
						exact
						path={`${process.env.REACT_APP_BASE}/portfolio/`}
						component={Portfolio}
					/>
					<Route
						exact
						path={`${process.env.REACT_APP_BASE}/contact/`}
						component={Contact}
					/>
					<Route component={NotFound} />
				</Switch>

				<Footer />
			</Router>
		)
	}
}
