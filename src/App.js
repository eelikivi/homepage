import React, {Component} from 'react'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Components
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Styles
import './scss/main.scss'


export default class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Main />
				<Footer />
			</ >
		)
	}
}
